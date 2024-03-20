import { Map, Placemark, YMaps, ZoomControl } from "@pbe/react-yandex-maps"
import styles from "./Directions.module.css"

export default function Directions() {
  return (
    <section id="Directions">
      <YMaps
        query={{
          lang: "en_US",
          apikey: "f8c1265b-ddbc-49f3-895a-61ddd32271ff",
        }}
      >
        <div className={styles.mapContainer}>
          <Map
            className={styles.Map}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            defaultState={{
              center: [34.100062, -118.327922],
              zoom: 18,
            }}
          >
            <ZoomControl options={{ position: { top: 100, right: 30 } }} />
            <Placemark
              geometry={[34.100062, -118.327922]}
              instanceRef={(ref) => {
                ref && ref.balloon.open()
              }}
              properties={{
                iconContent: "+",
                hintContent: "<b> I appear on hover </b>",
                balloonContentBody: `
                  <div class=${styles.balloon}>
                    <div class=${styles.balloon__row}>
                      <div class=${styles.balloon__icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="-70 0 512 512">
                          <path fill="#377ef9" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                      </div>
                      <span class=${styles.balloon__title}>1602 Selma Ave Los Angeles, CA 90029</span>
                    </div>
                    <div class=${styles.balloon__row}>
                      <div class=${styles.balloon__icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                          <path fill="#377ef9" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                        </svg>
                      </div>
                      <span class=${styles.balloon__title}>(323) 660-9920</span>
                    </div>
                    <div class=${styles.balloon__row}>
                      <div class=${styles.balloon__icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512">
                          <path fill="#377ef9" d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/>
                        </svg>
                      </div>
                      <span class=${styles.balloon__title}>Hours</span>
                    </div>
                    <div>
                      <div class=${styles.balloon__open}>
                        <span class=${styles.balloon__text}>Monday-Friday</span>
                        <span class=${styles.balloon__text}>8.30am - 6.00pm</span>
                      </div>
                      <div class=${styles.balloon__open}>
                        <span class=${styles.balloon__text}>Saturday</span>
                        <span class=${styles.balloon__text}>9.00am - 2.30pm</span>
                      </div>
                    </div>
                  </div>
                `,
              }}
            />
          </Map>
        </div>
      </YMaps>
    </section>
  )
}
