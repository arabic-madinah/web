#!/bin/sh

# Default value
OUT_PATH="runtime-env.js"

# Parse keyword arguments
for arg in "$@"; do
  case $arg in
    --out=*)
      OUT_PATH="${arg#*=}"
      shift
      ;;
  esac
done

# Find only variables with prefix
ENV_KEY_PREFIX="VITE_"

echo "Generating runtime env vars into $OUT_PATH..." >&2

# Loop through all env vars
body=$(printenv | while IFS='=' read -r key value; do
  if [ "${key#"$ENV_KEY_PREFIX"}" != "$key" ]; then
    clean_key=${key#"$ENV_KEY_PREFIX"}
    escaped_value=$(printf '%s' "$value" | sed 's/"/\\"/g')
    echo "  \"${clean_key}\": \"${escaped_value}\","
    echo "Included: $key" >&2
  fi
done)

# Remove trailing comma
body=$(printf "%s" "$body" | sed '$ s/,$//')

# Final output
{
  echo "window.__RUNTIME_ENV__ = {"
  echo "$body"
  echo "};"
} > "$OUT_PATH"


# Write to file once
echo "Wrote environment to $OUT_PATH" >&2

exec "${@}"