import {useState} from "react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"

const CountryCode = [
    {
        "country": "Afghanistan",
        "code": "+93"
    },
    {
        "country": "Albania",
        "code": "+355"
    },
    {
        "country": "Algeria",
        "code": "+213"
    },
    {
        "country": "Andorra",
        "code": "+376"
    },
    {
        "country": "Angola",
        "code": "+244"
    },
    {
        "country": "Antigua and Barbuda",
        "code": "+1-268"
    },
    {
        "country": "Argentina",
        "code": "+54"
    },
    {
        "country": "Armenia",
        "code": "+374"
    },
    {
        "country": "Australia",
        "code": "+61"
    },
    {
        "country": "Austria",
        "code": "+43"
    },
    {
        "country": "Azerbaijan",
        "code": "+994"
    },
    {
        "country": "Bahamas",
        "code": "+1-242"
    },
    {
        "country": "Bahrain",
        "code": "+973"
    },
    {
        "country": "Bangladesh",
        "code": "+880"
    },
    {
        "country": "Barbados",
        "code": "+1-246"
    },
    {
        "country": "Belarus",
        "code": "+375"
    },
    {
        "country": "Belgium",
        "code": "+32"
    },
    {
        "country": "Belize",
        "code": "+501"
    },
    {
        "country": "Benin",
        "code": "+229"
    },
    {
        "country": "Bhutan",
        "code": "+975"
    },
    {
        "country": "Bolivia",
        "code": "+591"
    },
    {
        "country": "Bosnia and Herzegovina",
        "code": "+387"
    },
    {
        "country": "Botswana",
        "code": "+267"
    },
    {
        "country": "Brazil",
        "code": "+55"
    },
    {
        "country": "Brunei",
        "code": "+673"
    },
    {
        "country": "Bulgaria",
        "code": "+359"
    },
    {
        "country": "Burkina Faso",
        "code": "+226"
    },
    {
        "country": "Burundi",
        "code": "+257"
    },
    {
        "country": "Cambodia",
        "code": "+855"
    },
    {
        "country": "Cameroon",
        "code": "+237"
    },
    {
        "country": "Canada",
        "code": "+1"
    },
    {
        "country": "Cape Verde",
        "code": "+238"
    },
    {
        "country": "Central African Republic",
        "code": "+236"
    },
    {
        "country": "Chad",
        "code": "+235"
    },
    {
        "country": "Chile",
        "code": "+56"
    },
    {
        "country": "China",
        "code": "+86"
    },
    {
        "country": "Colombia",
        "code": "+57"
    },
    {
        "country": "Comoros",
        "code": "+269"
    },
    {
        "country": "Congo",
        "code": "+242"
    },
    {
        "country": "Costa Rica",
        "code": "+506"
    },
    {
        "country": "Croatia",
        "code": "+385"
    },
    {
        "country": "Cuba",
        "code": "+53"
    },
    {
        "country": "Cyprus",
        "code": "+357"
    },
    {
        "country": "Czech Republic",
        "code": "+420"
    },
    {
        "country": "Denmark",
        "code": "+45"
    },
    {
        "country": "Djibouti",
        "code": "+253"
    },
    {
        "country": "Dominica",
        "code": "+1-767"
    },
    {
        "country": "Dominican Republic",
        "code": "+1-809, +1-829, +1-849"
    },
    {
        "country": "East Timor",
        "code": "+670"
    },
    {
        "country": "Ecuador",
        "code": "+593"
    },
    {
        "country": "Egypt",
        "code": "+20"
    },
    {
        "country": "El Salvador",
        "code": "+503"
    },
    {
        "country": "Equatorial Guinea",
        "code": "+240"
    },
    {
        "country": "Eritrea",
        "code": "+291"
    },
    {
        "country": "Estonia",
        "code": "+372"
    },
    {
        "country": "Ethiopia",
        "code": "+251"
    },
    {
        "country": "Fiji",
        "code": "+679"
    },
    {
        "country": "Finland",
        "code": "+358"
    },
    {
        "country": "France",
        "code": "+33"
    },
    {
        "country": "Gabon",
        "code": "+241"
    },
    {
        "country": "Gambia",
        "code": "+220"
    },
    {
        "country": "Georgia",
        "code": "+995"
    },
    {
        "country": "Germany",
        "code": "+49"
    },
    {
        "country": "Ghana",
        "code": "+233"
    },
    {
        "country": "Greece",
        "code": "+30"
    },
    {
        "country": "Grenada",
        "code": "+1-473"
    },
    {
        "country": "Guatemala",
        "code": "+502"
    },
    {
        "country": "Guinea",
        "code": "+224"
    },
    {
        "country": "Guinea-Bissau",
        "code": "+245"
    },
    {
        "country": "Guyana",
        "code": "+592"
    },
    {
        "country": "Haiti",
        "code": "+509"
    },
    {
        "country": "Honduras",
        "code": "+504"
    },
    {
        "country": "Hungary",
        "code": "+36"
    },
    {
        "country": "Iceland",
        "code": "+354"
    },
    {
        "country": "India",
        "code": "+91"
    },
    {
        "country": "Indonesia",
        "code": "+62"
    },
    {
        "country": "Iran",
        "code": "+98"
    },
    {
        "country": "Iraq",
        "code": "+964"
    },
    {
        "country": "Ireland",
        "code": "+353"
    },
    {
        "country": "Israel",
        "code": "+972"
    },
    {
        "country": "Italy",
        "code": "+39"
    },
    {
        "country": "Jamaica",
        "code": "+1-876"
    },
    {
        "country": "Japan",
        "code": "+81"
    },
    {
        "country": "Jordan",
        "code": "+962"
    },
    {
        "country": "Kazakhstan",
        "code": "+7"
    },
    {
        "country": "Kenya",
        "code": "+254"
    },
    {
        "country": "Kiribati",
        "code": "+686"
    },
    {
        "country": "Kosovo",
        "code": "+383"
    },
    {
        "country": "Kuwait",
        "code": "+965"
    },
    {
        "country": "Kyrgyzstan",
        "code": "+996"
    },
    {
        "country": "Laos",
        "code": "+856"
    },
    {
        "country": "Latvia",
        "code": "+371"
    },
    {
        "country": "Lebanon",
        "code": "+961"
    },
    {
        "country": "Lesotho",
        "code": "+266"
    },
    {
        "country": "Liberia",
        "code": "+231"
    },
    {
        "country": "Libya",
        "code": "+218"
    },
    {
        "country": "Liechtenstein",
        "code": "+423"
    },
    {
        "country": "Lithuania",
        "code": "+370"
    },
    {
        "country": "Luxembourg",
        "code": "+352"
    },
    {
        "country": "Macedonia",
        "code": "+389"
    },
    {
        "country": "Madagascar",
        "code": "+261"
    },
    {
        "country": "Malawi",
        "code": "+265"
    },
    {
        "country": "Malaysia",
        "code": "+60"
    },
    {
        "country": "Maldives",
        "code": "+960"
    },
    {
        "country": "Mali",
        "code": "+223"
    },
    {
        "country": "Malta",
        "code": "+356"
    },
    {
        "country": "Marshall Islands",
        "code": "+692"
    },
    {
        "country": "Mauritania",
        "code": "+222"
    },
    {
        "country": "Mauritius",
        "code": "+230"
    },
    {
        "country": "Mexico",
        "code": "+52"
    },
    {
        "country": "Micronesia",
        "code": "+691"
    },
    {
        "country": "Moldova",
        "code": "+373"
    },
    {
        "country": "Monaco",
        "code": "+377"
    },
    {
        "country": "Mongolia",
        "code": "+976"
    },
    {
        "country": "Montenegro",
        "code": "+382"
    },
    {
        "country": "Morocco",
        "code": "+212"
    },
    {
        "country": "Mozambique",
        "code": "+258"
    },
    {
        "country": "Myanmar",
        "code": "+95"
    },
    {
        "country": "Namibia",
        "code": "+264"
    },
    {
        "country": "Nauru",
        "code": "+674"
    },
    {
        "country": "Nepal",
        "code": "+977"
    },
    {
        "country": "Netherlands",
        "code": "+31"
    },
    {
        "country": "New Zealand",
        "code": "+64"
    },
    {
        "country": "Nicaragua",
        "code": "+505"
    },
    {
        "country": "Niger",
        "code": "+227"
    },
    {
        "country": "Nigeria",
        "code": "+234"
    },
    {
        "country": "North Korea",
        "code": "+850"
    },
    {
        "country": "Norway",
        "code": "+47"
    },
    {
        "country": "Oman",
        "code": "+968"
    },
    {
        "country": "Pakistan",
        "code": "+92"
    },
    {
        "country": "Palau",
        "code": "+680"
    },
    {
        "country": "Palestine",
        "code": "+970"
    },
    {
        "country": "Panama",
        "code": "+507"
    },
    {
        "country": "Papua New Guinea",
        "code": "+675"
    },
    {
        "country": "Paraguay",
        "code": "+595"
    },
    {
        "country": "Peru",
        "code": "+51"
    },
    {
        "country": "Philippines",
        "code": "+63"
    },
    {
        "country": "Poland",
        "code": "+48"
    },
    {
        "country": "Portugal",
        "code": "+351"
    },
    {
        "country": "Qatar",
        "code": "+974"
    },
    {
        "country": "Romania",
        "code": "+40"
    },
    {
        "country": "Russia",
        "code": "+7"
    },
    {
        "country": "Rwanda",
        "code": "+250"
    },
    {
        "country": "Saint Kitts and Nevis",
        "code": "+1-869"
    },
    {
        "country": "Saint Lucia",
        "code": "+1-758"
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "code": "+1-784"
    },
    {
        "country": "Samoa",
        "code": "+685"
    },
    {
        "country": "San Marino",
        "code": "+378"
    },
    {
        "country": "Sao Tome and Principe",
        "code": "+239"
    },
    {
        "country": "Saudi Arabia",
        "code": "+966"
    },
    {
        "country": "Senegal",
        "code": "+221"
    },
    {
        "country": "Serbia",
        "code": "+381"
    },
    {
        "country": "Seychelles",
        "code": "+248"
    },
    {
        "country": "Sierra Leone",
        "code": "+232"
    },
    {
        "country": "Singapore",
        "code": "+65"
    },
    {
        "country": "Slovakia",
        "code": "+421"
    },
    {
        "country": "Slovenia",
        "code": "+386"
    },
    {
        "country": "Solomon Islands",
        "code": "+677"
    },
    {
        "country": "Somalia",
        "code": "+252"
    },
    {
        "country": "South Africa",
        "code": "+27"
    },
    {
        "country": "South Korea",
        "code": "+82"
    },
    {
        "country": "South Sudan",
        "code": "+211"
    },
    {
        "country": "Spain",
        "code": "+34"
    },
    {
        "country": "Sri Lanka",
        "code": "+94"
    },
    {
        "country": "Sudan",
        "code": "+249"
    },
    {
        "country": "Suriname",
        "code": "+597"
    },
    {
        "country": "Swaziland",
        "code": "+268"
    },
    {
        "country": "Sweden",
        "code": "+46"
    },
    {
        "country": "Switzerland",
        "code": "+41"
    },
    {
        "country": "Syria",
        "code": "+963"
    },
    {
        "country": "Taiwan",
        "code": "+886"
    },
    {
        "country": "Tajikistan",
        "code": "+992"
    },
    {
        "country": "Tanzania",
        "code": "+255"
    },
    {
        "country": "Thailand",
        "code": "+66"
    },
    {
        "country": "Togo",
        "code": "+228"
    },
    {
        "country": "Tonga",
        "code": "+676"
    },
    {
        "country": "Trinidad and Tobago",
        "code": "+1-868"
    },
    {
        "country": "Tunisia",
        "code": "+216"
    },
    {
        "country": "Turkey",
        "code": "+90"
    },
    {
        "country": "Turkmenistan",
        "code": "+993"
    },
    {
        "country": "Tuvalu",
        "code": "+688"
    },
    {
        "country": "Uganda",
        "code": "+256"
    },
    {
        "country": "Ukraine",
        "code": "+380"
    },
    {
        "country": "United Arab Emirates",
        "code": "+971"
    },
    {
        "country": "United Kingdom",
        "code": "+44"
    },
    {
        "country": "United States",
        "code": "+1"
    },
    {
        "country": "Uruguay",
        "code": "+598"
    },
    {
        "country": "Uzbekistan",
        "code": "+998"
    },
    {
        "country": "Vanuatu",
        "code": "+678"
    },
    {
        "country": "Vatican City",
        "code": "+39-06, +379"
    },
    {
        "country": "Venezuela",
        "code": "+58"
    },
    {
        "country": "Vietnam",
        "code": "+84"
    },
    {
        "country": "Yemen",
        "code": "+967"
    },
    {
        "country": "Zambia",
        "code": "+260"
    },
    {
        "country": "Zimbabwe",
        "code": "+263"
    }
]

function ContactForm()
{
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful },
      } = useForm()

      useEffect(() => {
        if (isSubmitSuccessful) {
          reset({
            email: "",
            firstname: "",
            lastname: "",
            message: "",
            phoneNo: "",
          })
        }
      }, [reset, isSubmitSuccessful])

      async function submitContactForm(data)
      {
            try 
            {
                const URL = import.meta.env.VITE_BACKEND_URL;
                const response = await fetch(`${URL}user/contactus`,{
                    method : "POST",
                    headers : 
                    {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify(data)
                })
                
                if (!response.ok) {
                    throw new Error(response.message)
                  }

                console.log(response);
            }
            catch(error)
            {
                console.log(error.message);
            }
      }

    return(
    <>
         <form
      className="flex flex-col gap-7"
      onSubmit={handleSubmit(submitContactForm)}
    >
      <div className="flex flex-col gap-5 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="firstname" className="lable-style">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter first name"
            className="bg-gray-800 p-2 rounded-xl"
            {...register("firstname", { required: true })}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your first name.
            </span>
          )}
        </div>
        <div className="flex flex-col gap-2 lg:w-[48%]">
          <label htmlFor="lastname" className="lable-style">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Enter last name"
            className="bg-gray-800 p-2 rounded-xl"
            {...register("lastname")}
          />
          {errors.firstname && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your last name.
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="lable-style">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className="bg-gray-800 p-2 rounded-xl"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phonenumber" className="lable-style">
          Phone Number
        </label>

        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              className="bg-slate-800 p-2 cursor-pointer"
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} -{ele.country}
                  </option>
                )
              })}
            </select>
          </div>
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className="bg-gray-800 p-2 rounded-xl"
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="lable-style">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="7"
          placeholder="Enter your message here"
          className="bg-slate-800 p-2"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Message.
          </span>
        )}
      </div>

      <button type="submit" className="text-lg bg-yellow-400 hover:bg-yellow-600 text-black font-bold p-2 rounded-xl"> Send Message </button>
    </form>
    </>);
}

export default ContactForm;