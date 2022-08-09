/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nonoctal-decimal-escape */
/* eslint-disable import/no-unresolved */
import { useTranslation } from "react-i18next";
// import { loadCaptchaEnginge, LoadCanvasTemplateNoReload, validateCaptcha } from "react-simple-captcha";
import { useFormik } from "formik";
// import { toast } from "react-toastify";
import * as Yup from "yup";
import { toast } from "react-toastify";
import PageHeader from "../../../components/PageHeader";
import VirtualReceptionSvg from "../../../assets/svg/virtual_reception.svg";
import Input from "../../../components/Input";
import Spinner from "../../../components/Spinner";
import TextArea from "../../../components/TextArea";
import InputMask from "../../../components/InputMask";
import Uploader from "../../../components/Uploader";
import useVirtual from "../../../modules/mutation/useVirtual";

const VirtualReception = () => {
  const { t } = useTranslation();
  const { mutate, isLoading } = useVirtual();

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    phone: Yup.string().required(),
    mavsu: Yup.string().required(),
    matn: Yup.string().required(),
    fayl: Yup.mixed().required()
  }).shape();

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      mavsu: "",
      matn: "",
      fayl: ""
    },
    validationSchema,
    onSubmit: values => {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("mavsu", values.mavsu);
      formData.append("matn", values.matn);
      formData.append("fayl", values.fayl);
      mutate(formData, {
        onSuccess: () => toast.success(t("application_successfully_receved")),
        onError: () => toast.error(t("internal_error"))
      });
    }
  });

  return (
    <div className="md:pt-14 pb-5">
      <PageHeader title="virtual_reception" paths={[{ title: "virtual_reception" }]} />
      <div className="responsive">
        <div className="grid md:grid-cols-3 grid-cols-1 py-10 gap-10">
          {isLoading && <Spinner />}
          <div className="md:col-span-2 col-span-1">
            <form onSubmit={formik.handleSubmit} className="grid md:grid-cols-1 grid-cols-1 gap-5">
              <div>
                <Input
                  invalid={formik.errors.name}
                  name="name"
                  onChange={formik.handleChange}
                  label={t("field_full_name")}
                  placeholder={t("field_full_name")}
                />
              </div>
              <div>
                <InputMask
                  invalid={formik.errors.phone}
                  name="phone"
                  onChange={formik.handleChange}
                  label={t("field_phone_number")}
                  mask="+\9\98999999999"
                  placeholder="+998XXXXXXXXX"
                />
              </div>
              <div className="md:col-span-2 col-span-1">
                <Input invalid={formik.errors.mavsu} name="mavsu" onChange={formik.handleChange} label={t("field_title")} placeholder={t("field_title")} />
              </div>
              <div className="md:col-span-2 col-span-1">
                <TextArea invalid={formik.errors.matn} name="matn" onChange={formik.handleChange} label={t("field_theme")} placeholder={t("field_theme")} />
              </div>
              <div className="md:col-span-2 col-span-1">
                <Uploader
                  invalid={formik.errors.fayl}
                  name="fayl"
                  onChange={e => formik.setFieldValue("fayl", e?.target?.files[0])}
                  label={t("field_select_file")}
                  placeholder={t("field_select_file")}
                />
              </div>
              <button type="submit" className="py-1 px-2 w-fit bg-primary_green rounded text-white">
                {t("confirmation_button")}
              </button>
            </form>
          </div>
          <div className="md:block hidden">
            <img src={VirtualReceptionSvg} alt="VirtualReceptionSvg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualReception;
