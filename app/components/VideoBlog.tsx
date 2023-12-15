type Props = {
    id: string
}

export default function VideoBlog({ id }: Props) {
    return (
        <div className="aspect-w-6 aspect-h-6 mx-2">
            <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    );
}