import React, { useState, useEffect } from "react";
import { BlogsState } from "../Context";

const Beyondwork = () => {
  const { images } = BlogsState() || {};
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (images && images.length > 0) {
      const flattenedImages =
        images[0]?.image?.map((imgObj) => imgObj.image) || [];

      console.log("IMAGES 👉", flattenedImages); 
      setImageList(flattenedImages);
    }
  }, [images]);

  useEffect(() => {
  const handleKey = (e) => {
    if (
      e.ctrlKey &&
      ["c", "s", "u", "p"].includes(e.key.toLowerCase())
    ) {
      e.preventDefault();
    }

    if (e.key === "PrintScreen") {
      navigator.clipboard.writeText("");
      alert("Screenshots are disabled!");
    }
  };

  document.addEventListener("keydown", handleKey);
  return () => document.removeEventListener("keydown", handleKey);
}, []);

useEffect(() => {
  const disableRightClick = (e) => {
    e.preventDefault();
  };

  document.addEventListener("contextmenu", disableRightClick);

  return () => {
    document.removeEventListener("contextmenu", disableRightClick);
  };
}, []);
useEffect(() => {
  const handleVisibility = () => {
    document.body.style.filter = document.hidden
      ? "blur(10px)"
      : "none";
  };

  document.addEventListener("visibilitychange", handleVisibility);
  return () =>
    document.removeEventListener("visibilitychange", handleVisibility);
}, []);

  return (
    <>
      <style>{`
        .honeycomb {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding-bottom: 50px;
        }

        /* HEX TILE */
        .hex {
          width: 180px;
          height: 200px;
          margin: 10px 6px; 
          position: relative;
          cursor: pointer;
  pointer-events: auto;
        }

        /* HEX IMAGE */
        .hex img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none; /* 🔥 strong protection */


          clip-path: polygon(
            50% 0%,
            100% 25%,
            100% 75%,
            50% 100%,
            0% 75%,
            0% 25%
          );

          transition: transform 0.4s ease;
        }

        /* 🔥 HOVER = ZOOM ONLY */
        .hex:hover img {
          transform: scale(1.15);
        }

        /* OFFSET FOR HONEYCOMB SHAPE */
        .hex:nth-child(even) {
          transform: translateY(50px);
        }

       /* TABLET */
@media (max-width: 768px) {
  .honeycomb {
    padding-bottom: 30px;
  }

  .hex {
    width: 130px;
    height: 150px;
    margin: 8px 4px; /* ✅ normal spacing */
  }

  .hex:nth-child(even) {
    transform: translateY(20px); /* ✅ smaller offset */
  }
}

/* MOBILE */
@media (max-width: 480px) {
  .honeycomb {
    padding: 20px 10px;
  }

  .hex {
    width: 100px;
    height: 120px;
    margin: 6px 3px; /* ✅ NO NEGATIVE */
  }

  .hex:nth-child(even) {
    transform: translateY(10px); /* ✅ minimal shift */
  }
}

        /* POPUP */
        .popup-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(5px);
          z-index: 999;
        }

        .popup {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          padding: 20px;
          border-radius: 16px;
          z-index: 1000;
          max-width: 90%;
          max-height: 90%;
        }

        .popup img {
          max-width: 100%;
          max-height: 80vh;
          border-radius: 10px;
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 12px;
          background: black;
          color: white;
          border: none;
          border-radius: 50%;
          width: 35px;
          height: 35px;
          font-size: 20px;
          cursor: pointer;
        }
          @media (max-width: 480px) {
  .popup {
    width: 95vw;          /* almost full width */
    height: auto;
    padding: 10px;        /* less padding = more image space */
    border-radius: 10px;
  }

  .popup img {
    width: 100%;
    max-height: 85vh;     /* bigger image */
    object-fit: contain;
  }

  .close-btn {
    width: 30px;
    height: 30px;
    font-size: 18px;
    top: 5px;
    right: 6px;
  }
}
      `}</style>

      <div className="my-8">
        <h1 className="sm:text-3xl text-2xl pb-3 font-bold text-center">
          Where Life's{" "}
          <span style={{ color: "#4f46e5" }}>Best Moments</span> Happen
        </h1>
      </div>

      <div className="honeycomb">
        {imageList.length > 0 ? (
          imageList.map((img, i) => (
            <div key={i} className="hex"  onClick={() => setSelectedImage(img)}>
              <img
                src={img}
                alt=""
  draggable={false}
  onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()}
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/300?text=Image")
                }
              />
            </div>
          ))
        ) : (
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "400px",
            width: "100%"
          }}>
            <img src="/images/loading.gif" alt="Loading..." style={{ 
              maxWidth: "250px",
              height: "auto"
            }} />
          </div>
        )}
      </div>

      {/* POPUP */}
      {selectedImage && (
        <>
          <div
            className="popup-overlay"
            onClick={() => setSelectedImage(null)}
          />
          <div className="popup">
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <img src={selectedImage}  alt=""
  draggable={false}
  onContextMenu={(e) => e.preventDefault()}
  onDragStart={(e) => e.preventDefault()}
  />
          </div>
        </>
      )}
    </>
  );
};

export default Beyondwork;