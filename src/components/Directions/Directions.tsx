import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps"
import styles from './Directions.module.css';


export default function Directions() {

  return (
    <section id="Directions">
      <YMaps>
        <div>
          <Map
            width={"100%"}
            height={720}
            modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
            defaultState={{
              center: [34.100062, -118.327922],
              zoom: 18,
            }}
          >
            <Placemark
              geometry={[34.100062, -118.327922]}
              properties={{
                iconContent: "+", // пару символов помещается
                hintContent: "<b> Я появляюсь при наведении на метку </b>",
                // создаём пустой элемент с заданными размерами
                balloonContentBody: [
                    `
                      <div className=${styles.balloon}>
                          <a href={link} class="baloon-content__title">Hi</a>
                          <div class="baloon-content__body">Hihi</div>
                          <div class="baloon-content__link">
                              <a href={link} class="baloon__link">Подробнее</a>
                          </div>
                      </div>
                      `,
                  ].join("")
              }}

            />
            
          </Map>

        </div>
      </YMaps>
      {/* <div className={styles.info}></div> */}
    </section>
  )
}
