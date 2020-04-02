import { useState } from "react"
import Layout from "../components/Layout"
import { ArrowRight, ArrowLeft } from "../components/Arrows"
import Textarea from "../components/TextArea"

import { encode, decode } from "../utils/Base64"

const initValue = {
  encode: "",
  decode: ""
}

const IndexPage = () => {
  const [isEncode, setIsEncode] = useState(true)
  const [base64, setBase64] = useState(initValue)

  const handleClick = () => {
    setIsEncode(t => !t)
    setBase64(initValue)
  }

  const handleBase64 = (value: string) => {
    if (!isEncode) {
      setBase64({ encode: encode(value), decode: value })
    } else {
      setBase64({ encode: value, decode: decode(value) })
    }
  }

  return (
    <Layout title="Dencoding | Base64 Encode Decode">
      <div className="header--bar">
        <h3 className="label">Encode</h3>
        <button className="button--switch" type="button" onClick={handleClick}>
          {isEncode ? <ArrowRight /> : <ArrowLeft />}
        </button>
        <h3 className="label">Decode</h3>
      </div>
      <Textarea
        onChange={handleBase64}
        placeholder={isEncode ? "Encode" : "Decode"}
        value={isEncode ? base64.encode : base64.decode}
      />
      <Textarea
        disabled
        placeholder={!isEncode ? "Encode" : "Decode"}
        value={isEncode ? base64.decode : base64.encode}
      />
      <style jsx>{`
        .button--switch {
          display: inline-block;
          padding: 0;
          background-color: #000000;
          border: 0;
          border-radius: 50%;
        }
        .button--switch:focus {
          outline: 0;
        }
        .button--switch:hover {
          background-color: #757575;
        }
        .header--bar {
          display: flex;
          padding: 1rem;
          justify-content: center;
          border: 2px solid #000000;
          margin-bottom: 1rem;
          margin-top: 2rem;
          border-radius: 5px;
          box-shadow: 0px 4px 4px rgba(50, 50, 71, 0.06),
            0px 4px 8px rgba(50, 50, 71, 0.06);
        }
        .label {
          margin: 0 1rem;
        }
      `}</style>
    </Layout>
  )
}

export default IndexPage
