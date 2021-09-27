import { useState } from "react";
import shrtcode from "./api/shrtcode";
import Shortlink from "./component/Shortlink";
import Particles from "reactparticles.js";


const App = () => {
  const [link, setLink] = useState("");
  const [short, setShort] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);
  console.log(short);

  //delete "http://" and "https://"
  const verifiedUrl = (url) => {
    let result = "";
    if (url.indexOf("http://") === 0) {
      result = url.replace("http://", "");
    } else if (url.indexOf("https://" === 0)) {
      result = url.replace("https://", "");
    } else {
      result = url;
    }
    return result;
  };
  //delete the last "/"
  const finalUrl =
    verifiedUrl(link).lastIndexOf("/") === verifiedUrl(link).length - 1
      ? verifiedUrl(link).replace(/.$/, "")
      : verifiedUrl(link);
  console.log(finalUrl);

  const handleSubmit = (e) => {
    e.preventDefault();
    getLink();
    setisSubmitted(true);
  };

  const getLink = async () => {
    await shrtcode
      .get(`shorten?url=${finalUrl}`)
      .then((response) => {
        setShort(response.data.result.short_link);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>

      <div className="min-h-screen flex items-center justify-center bg-tn-desert-rally bg-cover py-8 px-4 sm:px-6 lg:px-8">
      <Particles
  id="particles"
  config="particles/config-1.json"
  style={{
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: "0.2",
  }}
/>

        <div className="max-w-md w-full space-y-8 bg-white bg-opacity-40 px-8 py-12 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md">

          <div>
            <h2 className="text-center text-4xl text-gray-900 font-poppins font-black ">
              Shorten URL
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div className="rounded-md flex shadow-sm">
              <span className="inline-flex items-center px-3 rounded-l-md border-none bg-gray-800 text-gray-300 text-sm">
                http://
              </span>
              <input
                id="url-address"
                name="url"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-4 py-3 border text-gray-900 rounded-r-md focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-60 sm:text-sm"
                placeholder="URL address"
                onChange={(e) => setLink(e.target.value)}
              />
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-6 border border-transparent text-base rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-800 focus:ring-opacity-60 font-poppins font-normal"
              >
                Generate
              </button>
            </div>
            <div>
              {isSubmitted === true ? <Shortlink Short={short} /> : <></>}
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default App;
