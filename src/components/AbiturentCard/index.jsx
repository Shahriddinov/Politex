/* eslint-disable jsx-a11y/alt-text */
import { useTranslation } from "react-i18next";
import Button from "../Button";

const AbiturentCard = () => {
  const { t } = useTranslation();
  return (
    <div className="my-10">
      <div className=" bg-white p-5 rounded-xl shadow-lg relative duration-300">
        <div className="rounded-xl items-center justify-between duration-300">
          <img
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            className="w-[200px] h-[250px] left-0 top-1/2 transform -translate-y-1/2 absolute rounded-xl object-cover object-center lg:block hidden"
          />
          <div className="lg:pl-[200px] flex flex-col items-between duration-300">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto sequi voluptas? Saepe, quas eaque? Laudantium, alias natus quae error iusto
              quo impedit itaque sed porro minus, aliquam animi reprehenderit ad, ratione veniam aut totam beatae repellendus vitae iure rerum similique
              voluptatem adipisci? Blanditiis provident magni ut inventore praesentium corrupti?
            </p>
            <div className="flex justify-end">
              <Button title={t("batafsil")} className="py-1 px-3 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbiturentCard;
