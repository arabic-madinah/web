import {Chapter, Section} from "../../chapters";
import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ListItemText from "@material-ui/core/ListItemText";
import {ExpandLess, ExpandMore} from "@material-ui/icons";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import {Link} from "react-router-dom";
import Routes from "../../routes/routes";
import {green} from "@material-ui/core/colors";
import {useSelector} from "react-redux";
import {AppState} from "../../store";
import {WithStyles} from "@material-ui/core";
import {styles} from "../../styles";

interface DrawerListItemProps extends WithStyles<typeof styles> {
    chapter: Chapter
    completed: boolean,
    currentChapter: Chapter,
    currentSection: Section,
}

export function DrawerListItem({chapter, classes, currentChapter, currentSection}: DrawerListItemProps) {
    const [open, setOpen] = React.useState(()=>chapter.index === currentChapter.index);
    const progress = useSelector((state: AppState) => state.progress);

    const handleClick = () => {
        setOpen(!open);
    }

    const isLessonCompleted = (chapter: Chapter, lesson: Section): boolean => {
        return !! progress.chapters.find(c => c.index === chapter.index)?.lessons.find(l => l.index === lesson.index)?.completed;
    }

    const isChapterCompleted = (chapter: Chapter): boolean => {
        return !! progress.chapters.find(c => c.index === chapter.index)?.completed;
    }


    return (
        <div>
            <ListItem button onClick={handleClick} selected={chapter.index === currentChapter.index}>
                <ListItemIcon>
                    {
                        isChapterCompleted(chapter) ?
                        <CheckCircleIcon style={{ color: green[500] }} />
                        :
                        <RemoveCircleIcon />
                    }
                    
                </ListItemIcon>
                <ListItemText primary={`${chapter.index} ${chapter.title}`} />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {
                        chapter.lessons.map(lesson => (
                                <ListItem
                                    selected={chapter.index === currentChapter.index && lesson.index === currentSection.index}
                                    button
                                    key={lesson.index}
                                    component={Link}
                                    to={`${Routes.Learn}?chapter=${chapter.index}&lesson=${lesson.index}`}
                                    className={classes.nested}>
                                    <ListItemIcon>
                                        {
                                            isLessonCompleted(chapter, lesson) ?
                                                <CheckCircleOutlineIcon style={{color: green[500]}} />
                                                :
                                                <RemoveCircleOutlineIcon style={{color: "gray"}} />
                                        }
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={`${chapter.index}.${lesson.index} ${lesson.title}`}
                                        classes={{
                                            root: classes.drawerListItem,
                                            primary: classes.drawerListItem
                                        }}
                                    />
                                </ListItem>
                            ))
                    }
                </List>
            </Collapse>
        </div>
    )
}
