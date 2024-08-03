import { useEffect, useState } from "react";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { StaticImageData } from "next/image";
import BannerImageComp from "./BannerImageComp";
import { IMAGES } from "../../../data/addsData";
import { MdOutlineFileUpload } from "react-icons/md";

interface Banner {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  image: StaticImageData | { src: string; width: number; height: number };
  author: string;
  platform: string;
}

interface propsType {
  isOpen: boolean;
  onClose: () => void;
  bannerObj: Banner;
  setBannerObj: (banner: Banner) => void;
}

const modalStyle = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: "3%",
    width: "40%",
    maxHeight: "90vh",
    "overflow-y": "auto",
  },
};

export default function EditBannerTemplateBs({
  isOpen,
  onClose,
  bannerObj,
  setBannerObj,
}: propsType): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  useEffect(() => {
    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const url = e.target?.result as string;

        const img = new Image();
        img.onload = () => {
          setBannerObj({
            ...bannerObj,
            image: { src: url, width: img.width, height: img.height },
            author: "User",
            platform: "Local",
          });
        };
        img.src = url;
      };
      reader.readAsDataURL(selectedImage);
    }
  }, [selectedImage, setBannerObj, bannerObj]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyle}>
      <div className="flex flex-col align-middle justify-center items-center gap-6">
        <div className="flex flex-row justify-between align-middle w-[100%]">
          <p className="text-2xl text-gray-600 font-semibold">Edit Banner</p>
          <div style={{ cursor: "pointer" }}>
            <IoClose onClick={onClose} className="text-3xl text-gray-600" />
          </div>
        </div>
        <BannerImageComp banner={bannerObj} showEdit={false} />
        <div className="text-left w-[100%]">
          <p className="text-lg text-gray-600">
            Image Attribution:{" "}
            <i>
              Photo by{" "}
              <u>
                <a>{bannerObj.author}</a>
              </u>{" "}
              on{" "}
              <u>
                <a>{bannerObj.platform}</a>
              </u>
            </i>
          </p>
        </div>

        <div className="flex flex-col items-start justify-center w-[100%] gap-2">
          <p className="text-xl text-gray-600">Image</p>
          <ul
            className="flex flex-row gap-3"
            style={{
              whiteSpace: "nowrap",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
          >
            <li>
              <input
                accept="image/*"
                type="file"
                id="select-image"
                style={{ display: "none" }}
                onChange={(e) => setSelectedImage(e.target.files?.[0] || null)}
              />
              <label htmlFor="select-image">
                <MdOutlineFileUpload className="h-[5rem] w-[5rem] p-2 rounded-full text-white bg-gray-400 cursor-pointer" />
              </label>
            </li>
            {IMAGES.map((el) => (
              <li key={el.id} className="flex-shrink-0">
                <button
                  onClick={() =>
                    setBannerObj({
                      ...bannerObj,
                      image: el.image,
                      author: el.author,
                      platform: el.platform,
                    })
                  }
                >
                  <img
                    src={el.image.src}
                    alt="Image"
                    className="h-[5rem] w-[5rem] rounded-full"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start justify-center w-[100%] gap-2">
          <p className="text-xl text-gray-600">Title</p>
          <input
            type="text"
            className="w-[100%] p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
            value={bannerObj.title}
            onChange={(e) =>
              setBannerObj({ ...bannerObj, title: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col items-start justify-center w-[100%] gap-2">
          <p className="text-xl text-gray-600">Description</p>
          <input
            type="text"
            className="w-[100%] p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
            value={bannerObj.description}
            onChange={(e) =>
              setBannerObj({ ...bannerObj, description: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col items-start justify-center w-[100%] gap-2">
          <p className="text-xl text-gray-600">Button Text</p>
          <input
            type="text"
            className="w-[100%] p-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
            value={bannerObj.buttonText}
            onChange={(e) =>
              setBannerObj({ ...bannerObj, buttonText: e.target.value })
            }
          />
        </div>
        <button
          className="bg-emerald-900 text-white w-[100%] p-3 text-lg font-semibold rounded-md"
          onClick={onClose}
        >
          Done
        </button>
        <button className="text-lg text-emerald-600">Download</button>
      </div>
    </Modal>
  );
}
