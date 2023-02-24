import React from "react";
import Post from "../post/post";

const img = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale"
const img2 = "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F11%2Fanakin-episode-3-850x560.jpg"
const img3 ="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/250px-Flag_of_Ukraine.svg.png"
const icon = "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/10/27120854/Hayden-Christensen-FI-1.jpg"
const data = [
  {
    content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",
    date: "8February",
    image: img,
    author: {
      photo: icon,
      name: "Anakin Skywalker",
      nickname: "@dart_vader"
    }
  },
  { content:"How are you friends?)",
    date: "9February",
    image: img2,
    author: {
      photo: icon,
      name: "Anakin Skywalker",
      nickname: "@dart_vader"
    }
  },
  { content:"Slava Ukraini!!!",
    date: "23February",
    image: img3,
    author: {
      photo: icon,
      name: "Anakin Skywalker",
      nickname: "@dart_vader"
    }
  }
];

function Profile() {
  return (
    <div className="App">
     {data.map((person) => {
        return <Post {...person}/>
     })}
    </div>
  );
}

export default Profile;
