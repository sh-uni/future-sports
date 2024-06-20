import React from 'react';

const Social = () => {
  return (
    <div className="Social" id="Social" style={{alignSelf: "center"}}>
      <h2 style={{textAlign: "center", marginBottom: "10px"}}>Social</h2>
      <div>
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fquadballaustralia&tabs=timeline&width=500&height=700&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
                    width="500" height="700" style={{border:"none",overflow:"hidden"}}
                    scrolling="no" frameBorder="0" allowFullScreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
        </iframe>
      </div>
    </div>
  );
};

export default Social;