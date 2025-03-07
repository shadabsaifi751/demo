// components/BusinessInfoSection.js
import { useState } from "react";
import styles from "./BusinessInfoSection.module.scss";
import Image from "next/image";
import Flag from "@/assets/US.png";
import Building from "@/assets/building.png";
import search from "@/assets/search.png";
import location from "@/assets/location.png";
import AddIcon from "@/assets/Add.svg";

const BusinessInfoSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    {
      id: 1,
      title: "Business Info",
      description: "Business name, address, contact number and logo",
    },
    {
      id: 2,
      title: "Business Details",
      description: "Highlights, Support Type and Payment Modes",
    },
    {
      id: 3,
      title: "Business hours",
      description: "Working Hours and Closed Days",
    },
    {
      id: 4,
      title: "Owner Details",
      description: "Owner name and contact number",
    },
    { id: 5, title: "Business I.d.", description: "Unique Business ID" },
  ];

  return (
    <section className={styles.businessInfoSection}>
      <div className="container">
        <div className={styles.business_layout}>
          <div className={styles.sidebar}>
            <ul className={styles.steps}>
              <h2 className={styles.title}>Create Your Business Page</h2>
              {steps.map((step) => (
                <li
                  key={step.id}
                  className={`${styles.step} ${
                    activeStep === step.id ? styles.active : ""
                  }`}
                >
                  <div className={styles.stepNumber}>{step.id}</div>
                  <div className={styles.stepInfo}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.main_panel}>
            <h2 className={styles.title}>BUSINESS INFORMATION</h2>

            <div className={styles.form_wrap}>
              <div>
                <h3 className={styles.sec_title}>
                  Business Name, Address <span>*</span>
                </h3>
                <span className={styles.border_bottom}></span>
              </div>
              <div className={styles.form_input}>
                <input type="text" placeholder="Business name" id="Business" />
                <label for="Business">Business name</label>
              </div>
            </div>

            <div className={styles.form_wrap}>
              <h3 className={styles.sec_title}>
                Locate on Map <span>*</span>
              </h3>
              <span className={styles.border_bottom}></span>
              <div className={styles.mapSection}>
                <p className={styles.description}>
                  If its a residential address then on map place the pointer to
                  any nearby public location **
                </p>

                <div className={styles.mapPlaceholder}>
                  <div className={styles.input_search}>
                    <Image
                      src={search}
                      className={styles.icon}
                      width={25}
                      height={25}
                      alt=""
                    />
                    <input
                      type="text"
                      placeholder="Search for area, street name"
                      className={styles.input_control}
                    />
                  </div>
                  <button className={styles.find_device}>
                    <Image
                      src={location}
                      className={styles.icon}
                      width={24}
                      height={24}
                      alt=""
                    />
                    Find my Location
                  </button>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510388752!2d76.76356555059692!3d28.644287351485247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1741285063137!5m2!1sen!2sin"
                    width="600"
                    height="400"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.map}
                  ></iframe>
                  <div className={styles.location_info}>
                    <h4 className={styles.country}>Miami</h4>
                    <p className={styles.state}>United States</p>
                  </div>
                </div>

                <h3 className={styles.state_address}>Store address details</h3>
                <p className={styles.state_description}>
                  Address details are basis the store location mentioned above
                </p>

                <label className={styles.checkboxLabel}>
                  <input type="checkbox" className={styles.label_input} />
                  Hide my street address because I don’t have an address where
                  customer’s can visit
                </label>
                <div className={styles.form_input}>
                  <input type="text" placeholder="Street address" id="Street" />
                  <label for="Street">Street address</label>
                </div>
                <div className={styles.addressFields}>
                  <div className={styles.form_input}>
                    <input type="text" placeholder="City" id="City" />
                    <label for="City">City</label>
                  </div>
                  <div className={styles.form_input}>
                    <input type="text" placeholder="Zip Code" id="Zip" />
                    <label for="Zip">Zip Code</label>
                  </div>
                </div>
                <div className={styles.addressFields}>
                  <select id="options" className="mb-0" required>
                    <option value="option1">State</option>
                    <option value="option2">Option</option>
                  </select>
                  <div className={styles.country_flag_wrap}>
                    <Image
                      src={Flag}
                      width={21}
                      height={16}
                      className={styles.flag}
                    />
                    <select id="options" required>
                      <option value="option1">Country</option>
                      <option value="option2">USA</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.form_wrap}>
              <div>
                <h3 className={styles.sec_title}>
                  Business Phone Number <span>*</span>
                </h3>
                <span className={styles.border_bottom}></span>
              </div>
              <div className={styles.phoneInput}>
                <div className={styles.country_flag}>
                  <Image
                    src={Flag}
                    width={21}
                    height={16}
                    className={styles.flag}
                  />
                  <span className={styles.country_code}>+1</span>
                </div>
                <div className={styles.select_wrap}>
                  <input type="tel" placeholder="Business Contact No." />
                </div>
                {/* <button type="button" className={styles.verifyButton}>
                  Verify
                </button> */}
                <button type="button" className={styles.addIcon}>
                  <Image src={AddIcon} width={30} height={30} alt="" />
                </button>
              </div>
            </div>

            <div className={styles.form_wrap}>
              <div>
                <h3 className={styles.sec_title}>Business Logo</h3>
                <span className={styles.border_bottom}></span>
              </div>
              <div className={styles.logo_business}>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="logoOption"
                      value="default"
                      defaultChecked
                    />
                    Use default (as shown right side)
                  </label>
                  <label>
                    <input type="radio" name="logoOption" value="upload" />
                    Browse & Upload your business logo
                  </label>
                  <div>
                    <button type="button" className={styles.browseButton}>
                      Browse
                    </button>
                    <button type="button" className={styles.uploadButton}>
                      Upload
                    </button>
                  </div>
                  <p className={styles.logoNote}>
                    Logo size 200px x 200px, Only .png format accepted.
                  </p>
                </div>
                <div className={styles.logoPreview}>
                  <Image
                    src={Building}
                    alt="Default Logo"
                    width={121}
                    height={125}
                  />
                </div>
              </div>
            </div>

            <button type="submit" className={styles.nextButton}>
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfoSection;
