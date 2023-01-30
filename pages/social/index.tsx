import MainAppLayout from "@layouts/MainAppLayout"
import { ReactElement } from "react"
import Loader from "@components/common/Loader"

const Social = () => {
  return (
    <MainAppLayout>
      <div>
        <div className="w-[60px] h-[calc(100vh-80px)] cursor-pointer">social Page</div>
      </div>
    </MainAppLayout>
  )
}

export default Social
