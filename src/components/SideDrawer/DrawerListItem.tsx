import {Chapter} from "../../chapters/types";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import StarsIcon from "@material-ui/icons/Stars";
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore, StarBorder} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import Routes from "../../routes/routes";

interface DrawerListItemProps {
    chapter: Chapter
    classes: any
}

export function DrawerListItem({chapter, classes}: DrawerListItemProps) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    }

    return (
        <div>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <StarsIcon />
                </ListItemIcon>
                <ListItemText primary={`${chapter.index} ${chapter.title}`} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        chapter.lessons.map(lesson => (
                            <ListItem
                                component={Link}
                                to={`${Routes.Learn}?chapter=${chapter.index}&lesson=${lesson.index}`}
                                className={classes.nested}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <ListItemText primary={`${chapter.index}.${lesson.index} ${lesson.title}`} />
                            </ListItem>))
                    }
                </List>
            </Collapse>
        </div>
    )
}
