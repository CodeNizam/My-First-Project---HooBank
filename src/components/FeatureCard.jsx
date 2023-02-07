import { features } from "../constants"
import styles from "../style"


    const FeatureCard = ({icon, title, content, index}) => (

        <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
        
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue `}>
        
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
        
        </div>
        
        <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins leading-[23px] font-semibold text-white mb-1 text-[18px]">
          {title}
        </h4>
        <p className="font-poppins leading-[23px] font-normal text-dimWhite mb-1 text-[16px]">
        {content}
        
        </p>
        
        
        
        
        
        
        </div>
        
        
        </div>
        
        
        )
  


export default FeatureCard