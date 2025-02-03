  export const handleChange = (e,setFormData,formData) => {
    const {id,value} = e.target;
    e.preventDefault();
    setFormData({
      ...formData,
      [id]:value,
    })
  }

  export const handleSubmit = (e,addWorkout,setFormData,formData) => {
    e.preventDefault();
    addWorkout(formData);
    setFormData({
      name:"",
      type:"",
      minutes:""
    });
  };