interface GridItemProps {
    name: string;
}

const GridItem = ({ name }: GridItemProps) => {
    return (
        <div className="aspect-square bg-transparent rounded-xl border-4 border-violet-900">
            <h1>{name}</h1>
        </div>
    );
};

export default GridItem;
