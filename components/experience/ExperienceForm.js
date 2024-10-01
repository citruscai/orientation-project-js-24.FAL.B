import React,{useState} from 'react';

function ExperienceForm({onSubmit,onCancel}){
    //experience data, we might need to create a context in the future to pass it to the different components
    const [formData,setFormData] = useState({
        title:"",
        company:"",
        start_date:"",
        end_date:"",
        description:"",
        logo:"",
    });
    
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    
    };
    //we should add the code that sends this data to our python side here
    handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

}
return(
    <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
        <label>
            Company:
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
        </label>
        <label>
            Start Date:
            <input type="date" name="start_date" value={formData.start_date} onChange={handleChange} />
        </label>
        <label>
            End Date:
            <input type="date" name="end_date" value={formData.end_date} onChange={handleChange} />
        </label>
        <label>
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} />
        </label>
        <label>
            Logo:
            <input type="file" name="logo" onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={onCancel}>Cancel</button>
    </form>
);
export default ExperienceForm;

