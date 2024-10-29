import styles from "./GridItem.module.scss";

interface GridItemProps {
    name: string;
}

const GridItem = ({ name }: GridItemProps) => {
    return (
        <div className={styles.gridItem}>
            <h1>{name}</h1>
        </div>
    );
};

export default GridItem;
