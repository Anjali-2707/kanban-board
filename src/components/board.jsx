import classes from './board.module.scss';
import TaskCard from './task-card';
import ButtonCmp from '../reusable-component/button-cmp';

function Board () {
    return (
        <>
        <div className={classes.main}>
            <div className={classes['board-name']}>
                <span>Kanban Board</span>
                <ButtonCmp text="Add New Task" custClass="primary" iconClass="fas fa-plus-circle"/>
            </div>
            <div className={classes.board}>
                <div className={classes.column}>
                    <div className={classes.header}>
                        <span>To Do</span>
                    </div>
                    <TaskCard></TaskCard>
                </div>
                <div className={classes.column}>
                    <div className={classes.header}>
                        <span>In Progress</span>
                    </div>
                    <TaskCard></TaskCard>
                </div>
                <div className={classes.column}>
                    <div className={classes.header}>
                        <span>Done</span>
                    </div>
                    <TaskCard></TaskCard>
                </div>
            </div>
        </div>
        </>
    )
}

export default Board;