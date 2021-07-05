import {useEffect, useState} from "react";
import {getPosts} from "../../serveses/API";

export default function User ({item, selectUser})
{

    let [post, setPost] = useState([]);
    useEffect(()=> {
        getPosts(item.id).then( value => {
            setPost(value.data)
        })
    })

    return(
        <div>
            {item.id} - {item.name} -
            <button onClick={()=>{
                selectUser(item.id);
                {
                    post.map(val => {
                        if (item.id===val.userId)

                        {
                            console.log(val);
                        }

                    })
                }
            }}>click me</button>



        </div>
    );}