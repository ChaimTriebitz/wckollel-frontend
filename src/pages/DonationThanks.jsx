import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const DonationThanks = () => {
   const location = useLocation();
   const navigate = useNavigate();
   const donor = location?.state?.donor;

   useEffect(() => {
      if (!donor) {
         navigate("/")
      }
   }, [donor, navigate])

   if (!donor) return null

   return (
      <main className="main thank-you">
         <h1>Thank You, {donor.first_name} {donor.last_name} !</h1>
         <h4>Your donation has been successfully processed.</h4>
         <h4>A receipt has been sent to your email: <span>{donor.email}</span>.</h4>
         <h3>We appreciate your support!</h3>
         <h4></h4>
      </main>
   );
};
