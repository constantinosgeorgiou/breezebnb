import React from "react";
import {
    BiBed,
    BiBath,
    BiHome,
    BiTv,
} from "react-icons/bi";
import { RiHotelBedLine } from "react-icons/ri";
import { GiKnifeFork } from "react-icons/gi";

import SpaceCard from "./SpaceCard";

const BedsAndRooms = ({ space }) => {
    console.log("space: ", space);
    return (
        <div className="card-body p-0">
            <h3 className="card-title mb-0">
                Beds and Rooms
            </h3>
            <p className="card-subtitle mb-3">
                Square meters:{" "}
                {space.squareMeters}
            </p>
            <div className="row">
                <div className="col-md-4">
                    <SpaceCard
                        name={"Beds"}
                        quantity={space.beds}
                        icon={
                            <RiHotelBedLine
                                size={48}
                            />
                        }
                    />
                    <SpaceCard
                        name={"Bedrooms"}
                        quantity={space.bedrooms}
                        icon={<BiBed size={48} />}
                    />
                    <SpaceCard
                        name="Living rooms"
                        quantity={
                            space.livingrooms
                        }
                        icon={<BiTv size={48} />}
                    />
                </div>
                <div className="col-md-4">
                    <SpaceCard
                        name={"Rooms"}
                        quantity={space.rooms}
                        icon={
                            <BiHome size={48} />
                        }
                    />
                    <SpaceCard
                        name={"Bathooms"}
                        quantity={space.bathrooms}
                        icon={
                            <BiBath size={48} />
                        }
                    />
                    <SpaceCard
                        name={"Kitchens"}
                        quantity={space.kitchens}
                        icon={
                            <GiKnifeFork
                                size={48}
                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default BedsAndRooms;
