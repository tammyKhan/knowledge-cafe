import PropTypes from 'prop-types'; 
import { FaBookmark  } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
  const { id,title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;

  return (
    <div className='mb-20 space-y-3'>
      <img className='w-full max-h-screen my-5 rounded-lg' src={cover} alt={`Cover picture of the title ${title} `} />

      <div className='flex justify-between'>
         <div className='flex'>
            <img className='w-14 rounded-full' src={author_img} alt="" />
            <div className='ml-6'>
              <h3 className='text-2xl'>{author}</h3>
              <p>{posted_date}</p>
            </div>
         </div>

         <div className='flex items-center gap-2'>
             <span>{reading_time} min read</span>
             <button onClick={() => handleAddToBookmark(blog)}
              className=' text-red-600 text-2xl'>
                <FaBookmark ></FaBookmark>
                </button>
         </div>
      </div>

      <h2 className="text-2xl font-bold">{title}</h2> 
      <p>
        {
          hashtags.map((hash, i) => <span key={i}><a href="">{hash}</a></span>)
        }
      </p>
      <button 
          onClick={() => handleMarkAsRead (id, reading_time)}
          className='text-purple-600 font-bold underline'>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func
}

export default Blog;