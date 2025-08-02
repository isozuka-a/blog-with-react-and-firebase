import React, { useEffect } from 'react'
import './Home.css';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const Home = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const data = await getDocs(collection(db, 'posts'));
            setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
        }
        getPosts();
    },[])
  return (
    <div className='homePage'>
        <div className='postContents'>
            <div className='postHeader'>
                <h1>タイトル</h1>
            </div>
        
        <div className='postTextcontainer'>
            エンジニアになりたい
        </div>
        <div className='nameAndDeleteButton'>
            <h3>@akaneCode</h3>
            <button>削除</button>
        </div>
        </div>
    </div>
  )
}

export default Home