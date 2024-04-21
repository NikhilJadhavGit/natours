import "./rotatingcard.scss"

const tourDetails = {1:[
                        "3 day tour",
                        "Up to 30 people",
                        "2 tour guide",
                        "Sleep in cozy hostel",
                        "Difficulty: very easy",
                    ],
                    2:[
                        "7 day tour",
                        "Up to 40 people",
                        "6 tour guide",
                        "Sleep in provided tents",
                        "Difficulty: medium",
                    ],
                    3:[
                        "5 day tour",
                        "Up to 15 people",
                        "3 tour guide",
                        "Sleep in provided tents",
                        "Difficulty: hard",
                    ]

}
const RotatingCard = ({cssSelector=1,heading,price})=>{
    return(
        <div className="rotatingCard">
            <div className="rotatingCard_front">
                <div className={"cover_img--"+cssSelector}>

                </div>
                <div className={"cover_heading--"+cssSelector}>
                    {heading}
                </div>
                <div className="featurelist">
                    <ul>
                        {
                            tourDetails[cssSelector].map((feature,index)=>{
                                return(<li index={index}>{feature}</li>)
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className={"rotatingCard_back rotatingCard_back--"+cssSelector}>
                <div className="only">only</div>
                <div className="price">{price}</div>
                <a className='btn btn-white' href="#">More details</a>
            </div>
        </div>
    );
}

export default RotatingCard;