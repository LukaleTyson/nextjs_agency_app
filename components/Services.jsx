import styles from  "../styles/Services.module.css"
import Link from "next/link";
import Image from "next/image";

const Services = ({services})=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>What We Can Do</h1>
            <h1 className={styles.subtitle}>Services We Can help You with</h1>
            <div className={styles.services}>
                 {services.map(service=>(
                     
                     <Link passHref key={service.id} href={`/products/${service.name}`}>
                        <>
                        <div className={styles.service}>
                             <div className={styles.desc}>{service.desc}</div>
                            <span className={styles.cat}>{service.title}</span>
                             <div className={styles.media}>
                                {service.video ? (
                                   <video src={`/img/${service.video}`} autoPlay loop className={styles.video}/>
                                ) : (
                                    <Image  src={`/img/${service.photo}`} 
                                    alt="" 
                                    width="100%" 
                                    height="100%" 
                                    layout="fill"
                                    objectFit="cover"
                                    ></Image>
                                ) }
                             </div>
                         </div>

                        </>
                     </Link>
                 ))}
            </div>
        </div>
    );
}
export default Services;