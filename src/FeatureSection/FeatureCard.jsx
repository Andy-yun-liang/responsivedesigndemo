

const FeatureCard = (props) =>{
    const {feature} = props;

    return<div className = "flex items-center justify-start">
            <div>

            
            <img className = "w-48" src = {feature.image}/>
            {feature.title}
            </div>
            
            <div className = "flex justify-start w-72">

            {feature.description}
            </div>
            

    </div>



};

export default FeatureCard;