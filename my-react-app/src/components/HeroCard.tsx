import { Card, CardContent } from "./ui/card"

interface HeroCardProps {
    image: string
    title: string
    description: string
}

export default function HeroCard({ image, title, description }: HeroCardProps) {
    return (
        <Card className="overflow-hidden rounded-2xl
     shadow-md hover:shadow-xl transition-shadow duration-300 p-0 w-60">
            <div className="relative flex justify-center w-full">
                <img
                    src={image}
                    alt={title}
                    className="h-full object-cover"
                />
            </div>
            <CardContent className="p-5 space-y-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm line-clamp-3">{description}</p>
            </CardContent>
        </Card>
    )
}
