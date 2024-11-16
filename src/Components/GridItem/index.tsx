interface GridItemProps {
    name: string;
}

const GridItem = ({ name }: GridItemProps) => {
    return (
        <div className="">
            <h1>{name}</h1>
        </div>
    );
};

export default GridItem;
