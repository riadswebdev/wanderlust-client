"use client";
import { ArrowUpRight, CircleFill } from "@gravity-ui/icons";
import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const DestinationCard = ({ d }) => {
  const {
    category,
    country,
    departureDate,
    description,
    destinationName,
    duration,
    imageUrl,
    price,
  } = d;

  return (
    <div>
      <Card className="w-full ">
        <div className="relative  w-full aspect-video overflow-hidden rounded-2xl ">
          <Image
            unoptimized
            src={imageUrl}
            className="object-cover"
            alt={destinationName}
            fill
          />
          <Chip
            className="absolute bottom-5 left-5 rounded-full"
            color="success"
            variant="primary"
          >
            <CircleFill width={6} />
            <Chip.Label>
              <span className="text-sm font-medium text-foreground">
                {category} in {country}
              </span>
            </Chip.Label>
          </Chip>
        </div>
        <div className="">
          <Card.Header className="gap-1">
            <Card.Title className="pr-8">{destinationName}!</Card.Title>
            <Card.Description>{description}</Card.Description>
          </Card.Header>
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col">
              <span className="text-xs font-medium text-foreground">
                Starting from ${price}
              </span>
              <span className="text-xs text-muted">{duration} days</span>
            </div>
            <Link href={`/destination/${d._id}`}>
              <Button
                className="w-full sm:w-auto border-b rounded-none p-0 text-[#15A1BF] border-[#15A1BF]"
                variant="solid"
              >
                Book Now
                <ArrowUpRight />
              </Button>
            </Link>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default DestinationCard;
