import ReusableComponentFirst from "./user/ReusableComponentFirst";
import { clothes, newdata } from "../../src/component/store/StoreData";
import ReusableComponentSecond from "./user/ReusableComponentSecond";

const Blog = () => {
  return (
    <div>
      <ReusableComponentFirst title={"Hotproduct"} datas={clothes} />
      <ReusableComponentSecond title={"Tranding Product"} datas={clothes} />
    </div>
  );
};

export default Blog;
