import React,{ useState } from 'react'
import ContentPostingSection from '../components/Mood/ContentPostingSection'
import MoodPost from '../components/Mood/MoodPost'




const Mood = () => {
  const [contentData, setContentData] = useState({
    title: '',
    mood: '',
    content: ''
  });

  const handleContentSubmit = (data)=>{
    setContentData(data);
  }
  return (
    <div className='bg-slate-700'>
        <ContentPostingSection onSubmitContent = {handleContentSubmit}/>
        <MoodPost contentData={contentData}/>
    </div>
  )
}

export default Mood;
