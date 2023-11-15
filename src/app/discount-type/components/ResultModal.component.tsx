"use client";

import { Modal } from "@/common/components/modal";
import { ResultModalProps } from "./result-modal.types";
import { useEffect, useState } from "react";
import { resultText1, resultText2, resultText3, resultText4, resultText5, resultText6 } from "../texts";

function ResultModal({ showModal, setShowModal }: ResultModalProps) {
  const [thirdDiscount, setThirdDiscount] = useState("");
  const [driverDiscount, setDriverDiscount] = useState("");
  const [insuranceType, setInsuranceType] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [vehicleUsage, setVehicleUsage] = useState("");
  const [company, setCompany] = useState("");

  useEffect(() => {
    if (!showModal) {
      return;
    }

    setDriverDiscount(JSON.parse(localStorage.getItem("driverDiscount")!).text);
    setThirdDiscount(JSON.parse(localStorage.getItem("thirdDiscount")!).text);
    setCompany(JSON.parse(localStorage.getItem("company")!).text);
    setInsuranceType(localStorage.getItem("type")! === "third" ? "ثالث" : "بدنه");
    setVehicleType(JSON.parse(localStorage.getItem("vehicleType")!).text);
    setVehicleUsage(JSON.parse(localStorage.getItem("vehicleUsage")!).text);
  }, [showModal]);

  return (
    <Modal open={showModal} onOpenChange={setShowModal}>
      <div className="pr-6 pt-6 xsm:pr-12 md:pr-20">
        <p className="mb-3">
          <span>{resultText1}</span>
          <span>{insuranceType}</span>
        </p>
        <p className="mb-3">
          <span>{resultText2}</span>
          <span>{vehicleType}</span>
        </p>
        <p className="mb-3">
          <span>{resultText3}</span>
          <span>{vehicleUsage}</span>
        </p>
        <p className="mb-3">
          <span>{resultText4}</span>
          <span>{company}</span>
        </p>
        <p className="mb-3">
          <span>{resultText5}</span>
          <span>{thirdDiscount}</span>
        </p>
        <p className="mb-3">
          <span>{resultText6}</span>
          <span>{driverDiscount}</span>
        </p>
      </div>
    </Modal>
  );
}

export default ResultModal;
