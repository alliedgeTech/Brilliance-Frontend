import { useState } from 'react';
import CallFor from '../../API/CallFor';
import ApiList from '../../API/AllApiList';


function VerifyOtp() {
    const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']); 

    const handleInputChange = (index, value) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);
    };

    const verifyOtp = () => {
        const otp = otpValues.join(''); 
        const { verifyOTPApi } = ApiList;

        CallFor(verifyOTPApi, 'POST', { otp })
            .then(response => {
                console.log('OTP verification successful');
            })
            .catch(error => {
                if (error.response) {
                    console.error('Error verifying OTP:', error.response.data);
                } else if (error.request) {
                    console.error('No response received:', error.request);
                } else {
                    console.error('Request error:', error.message);
                }
            });
    };

    return (
        <>
            <div className="max-w-md mx-auto border max-w-sm mt-20 rounded mb-10">
                <form className="shadow-md px-4 py-6">
                    <div className="flex justify-center gap-2 mb-6">
                        {otpValues.map((value, index) => (
                            <input
                                key={index}
                                className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
                                type="text"
                                maxLength={1}
                                pattern="[0-9]"
                                inputMode="numeric"
                                autoComplete="one-time-code"
                                value={value}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                required=""
                            />
                        ))}
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            style={{ backgroundColor: '#CB8161' }}
                            type="button"
                            onClick={verifyOtp}
                        >
                            Verify
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default VerifyOtp;
