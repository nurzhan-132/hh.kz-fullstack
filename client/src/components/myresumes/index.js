import MyResume from "./myresume";

export default function MyResumes({resumes}) {
    const showResumes = resumes.map((item, index) => <MyResume key={index} item={item}/>);    

    return(
        <div>   
            {showResumes}            
        </div>
    );
}