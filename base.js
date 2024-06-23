window.oldRadmirConfig = {
  "icons": {
      "active_wanted": "",
      "armour": "",
      "breath": "",
      "cash": "",
      "circle": "",
      "health": "",
      "hunger": "",
      "inactive_wanted": "",
      "wanted_back": "",
      "weapon_back": "",
      "zone": ""

  }, "weapon": {
      "0": "",
      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "16": "",
      "17": "",
      "18": "",
      "19": "",
      "20": "",
      "22": "",
      "23": "",
      "24": "",
      "25": "",
      "26": "",
      "27": "",
      "28": "",
      "29": "",
      "30": "",
      "31": "",
      "32": "",
      "33": "",
      "34": "",
      "35": "",
      "36": "",
      "37": "",
      "38": "",
      "39": "",
      "40": "",
      "41": "",
      "42": "",
      "43": "",
      "44": "",
      "46": ""


  }, "logo": {

      "1": "",
      "2": "",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "",
      "8": "",
      "9": "",
      "10": "",
      "11": "",
      "12": "",
      "13": "",
      "14": "",
      "15": "",
      "16": "",
      "17": "",
      "18": "",
      "19": "",
      "20": "",
      "21": ""
  },
}

const oldRadmirHud = {
    Hud: {
        data: {
            hudEl: null,
            moneyEl: null,
            hpEl: {
                value: null,
                progress: null,
            },
            armourEl: {
                value: null,
                progress: null,
            },
            hungerEl: {
                value: null,
                progress: null,
            },
            breathEl: {
                wrapper: null,
                value: null,
                progress: null,
            },
            wanted: {
                wrapper: null,
                els: [],
            },
            weaponEl: {
                ammoEl: null,
                icon: null,
            },
            server: {
                wrapper: null,
                image: null,
            },
            freeze: {
                wrapper: null,
                fill: null,
            },
            bonusEl: null,
            greenZoneEl: null,
        },
        createHud() {
            this.data.hudEl = document.querySelector(".OLD-RADMIR-hud");
            this.data.moneyEl = document.querySelector("#OLD-RADMIR-cash__value");
            [this.data.hpEl.progress, this.data.hpEl.value] = [document.querySelector(".OLD-RADMIR-param__health .OLD-RADMIR-progress__value"), document.querySelector(".OLD-RADMIR-param__health .OLD-RADMIR-param__amount")];
            [this.data.armourEl.progress, this.data.armourEl.value] = [document.querySelector(".OLD-RADMIR-param__armour .OLD-RADMIR-progress__value"), document.querySelector(".OLD-RADMIR-param__armour .OLD-RADMIR-param__amount")];
            [this.data.hungerEl.progress, this.data.hungerEl.value] = [document.querySelector(".OLD-RADMIR-param__hunger .OLD-RADMIR-progress__value"), document.querySelector(".OLD-RADMIR-param__hunger .OLD-RADMIR-param__amount")];
            [this.data.breathEl.wrapper, this.data.breathEl.progress, this.data.breathEl.value] = [
                document.querySelector(".OLD-RADMIR-param__breath"),
                document.querySelector(".OLD-RADMIR-param__breath .OLD-RADMIR-progress__value"),
                document.querySelector(".OLD-RADMIR-param__breath .OLD-RADMIR-param__amount"),
            ];
            [this.data.wanted.wrapper, this.data.wanted.els] = [document.querySelector(".OLD-RADMIR-hud__wanted"), document.querySelector(".OLD-RADMIR-wanted__row").children];
            this.data.weaponEl.ammoEl = document.querySelector(".OLD-RADMIR-weapon__ammo").children;
            this.data.server.wrapper = document.querySelector(".OLD-RADMIR-logo");
            this.data.server.image = this.data.server.wrapper.children[0];
            this.data.bonusEl = document.querySelector(".OLD-RADMIR-logo__bonus");
            this.data.greenZoneEl = document.querySelector(".OLD-RADMIR-green-zone");
            this.data.weaponEl.icon = document.querySelector(".OLD-RADMIR-weapon__icon");
            this.data.freeze.wrapper = document.querySelector(".OLD-RADMIR-param__freeze");
            this.data.freeze.fill = document.querySelector(".OLD-RADMIR-freeze__fill");
            this.data.hudEl.style.transform = "scale(" + this.getScale() + ")";
            this.data.server.wrapper.style.transform = "scale(" + this.getScale() + ")";
            this.data.greenZoneEl.style.transform = "scale(" + this.getScale() + ")";
        },
        getScale() {
            const { clientWidth: A, clientHeight: e } = document.documentElement;
            return (A + e) / 3000;
        },
        onInfoChange(e, t) {
            (e == "show" || e == "showBars") && +t >= 1 && (this.data.hudEl.style.display = "");
            (e == "show" || e == "showBars") && +t === 0 && (this.data.hudEl.style.display = "none");
            e == "weapon" && (this.data.weaponEl.icon.src = window.oldRadmirConfig.weapon[t]);
            e === "weapon" && t >= 16 && ((this.data.weaponEl.ammoEl[0].style.display = ""), (this.data.weaponEl.ammoEl[1].style.display = ""));
            e === "weapon" && t < 16 && ((this.data.weaponEl.ammoEl[0].style.display = "none"), (this.data.weaponEl.ammoEl[1].style.display = "none"));
            e == "showGreenZoneTab" && (this.data.greenZoneEl.style.display = "");
            e == "hideGreenZoneTab" && (this.data.greenZoneEl.style.display = "none");
            e == "health" && ((this.data.hpEl.progress.style.width = t + "%"), (this.data.hpEl.value.innerText = t));
            e == "armour" && ((this.data.armourEl.progress.style.width = t + "%"), (this.data.armourEl.value.innerText = t));
            e == "hunger" && ((this.data.hungerEl.progress.style.width = t + "%"), (this.data.hungerEl.value.innerText = t));
            if (e == "breath") {
                if (t < 99) {
                    this.data.breathEl.wrapper.style.display = "";
                } else {
                    this.data.breathEl.wrapper.style.display = "none";
                }
                this.data.breathEl.progress.style.width = t + "%";
                this.data.breathEl.value.innerText = t;
            }
            e == "money" && (this.data.moneyEl.innerHTML = t.toLocaleString("DE"));
            if (e == "wanted") {
                if (t === 0 && !oldRadmirConfig.wantedAlwaysShow) {
                    this.data.wanted.wrapper.style.display = "none";
                    return;
                }
                this.data.wanted.wrapper.style.display = "";
                for (let a = 0; a < 6; a += 1) {
                    (5 - a) / t >= 1 || (5 - a == 0 && t == 0)
                        ? ((this.data.wanted.els[a].src = window.oldRadmirConfig.icons.inactive_wanted), (this.data.wanted.els[a].className = "OLD-RADMIR-wanted__inactive"))
                        : ((this.data.wanted.els[a].src = window.oldRadmirConfig.icons.active_wanted), (this.data.wanted.els[a].className = "OLD-RADMIR-wanted__active"));
                }
            }
            e == "ammoInClip" && (this.data.weaponEl.ammoEl[0].innerText = t);
            e == "totalAmmo" && (this.data.weaponEl.ammoEl[1].innerText = "/" + t);
            if (e == "setServer") {
                if (t <= 0) {
                    return (this.data.server.wrapper.style.display = "none");
                }
                if (t > 0 && this.data.server.wrapper.style.display == "none") {
                    this.data.server.wrapper.style.display = "";
                }
                this.data.server.image.src = window.oldRadmirConfig.logo[t];
            }
            if (e == "setBonus") {
                if (t <= 1) {
                    this.data.bonusEl.style.display = "none";
                } else {
                    this.data.bonusEl.style.display = "";
                }
                this.data.bonusEl.innerText = "x" + t;
            }
            window.interface("Hud").isNewYear && (this.data.freeze.wrapper.style.display = "");
            !interface("Hud").isNewYear && (this.data.freeze.wrapper.style.display = "none");
            e == "freeze" && (this.data.freeze.fill.style.width = t + "%");
        },
        setStyles() {
            const _0x51db11 = document.createElement("style");
            _0x51db11.innerHTML = `
            h1{
              font-family: Verdana;
              font-weight: 800;
              position: absolute;
              top: 50%;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              text-shadow: #000 1px 0 10px;
              color:white;
            }
            h2{
              font-family: Verdana;
              font-weight: 800;
              position: absolute;
              top: 55%;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              text-shadow: #000 1px 0 10px;
              color:white;
            }
            h3{
              font-family: Verdana;
              font-weight: 800;
              position: absolute;
              top: 60%;
              left: 50%;
              margin-right: -50%;
              transform: translate(-50%, -50%);
              text-shadow: #000 1px 0 10px;
              color:white;
            }
            body {
              font-family: Verdana;
              font-weight: 800;
            }
            
            #app .hud-radmir-wanted {
              display: none;
            }
            .OLD-RADMIR-logo {
              position: absolute;
              right: 2vh;
              top: 3vh;
              transform-origin: top right;
              display: none;
            }
            .OLD-RADMIR-logo__image {
              width: 270px;
              display: none;
            }
            .OLD-RADMIR-logo__bonus {
              background: #760000;
              display: none;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 16px;
              color: #fff;
              font-weight: 700;
              position: absolute;
              bottom: 40px;
              right: 20px;
              border-radius: 50%;
              font-style: italic;
              font-weight: 900;
            }
            .OLD-RADMIR-hud {
              display: none;
              transform-origin: right bottom;
              position: absolute;
              right: 0;
              top: 20px;
            }
            .OLD-RADMIR-weapon__back {
              display: none;
              position: absolute;
              right: 62px;
              top: 118px;
            }
            .OLD-RADMIR-weapon__icon {
              display: none;
              position: absolute;
              right: 62px;
              top: 123px;
            }
            .OLD-RADMIR-weapon__ammo {
              display: none;
              position: absolute;
              right: 90px;
              top: 220px;
              color: #fff;
              width: 80px;
              text-align: center;
            }
            .OLD-RADMIR-weapon__ammo #OLD-RADMIR-ammo__in-clip {
              display: none;
              font-family: GothamPro;
              font-weight: 900;
              font-style: italic;
              font-size: 25px;
              margin-right: 8px;
              text-shadow: 0 0 5px #00000080;
            }
            .OLD-RADMIR-weapon__ammo #OLD-RADMIR-ammo__total {
              display: none;
              font-family: GothamPro;
              font-weight: 300;
              font-style: italic;
              font-size: 18px;
              text-shadow: 0 0 5px #000000b3;
            }
            .OLD-RADMIR-hud .OLD-RADMIR-hud__cash {
              display: none;
              position: absolute;
              right: 240px;
              top: 138px;
              display: inline-flex;
              align-items: center;
              font-family: Verdana;
              font-weight: 800;
            }
            .OLD-RADMIR-cash__icon {
              display: none;
              margin-right: 13px;
              margin-top: 1px;
            }
            .OLD-RADMIR-hud__cash #OLD-RADMIR-cash__value {
              display: none;
              font-family: GothamPro;
              font-weight: 900;
              font-style: italic;
              color: #fff;
              display: inline-block;
              font-size: 28px;
              text-shadow: 0 0 5px #00000080;
            }
            .OLD-RADMIR-hud .OLD-RADMIR-hud__params {
              display: none;
              width: 170px;
              position: absolute;
              top: 180px;
              right: 255px;
            }
            .OLD-RADMIR-param__armour,
            .OLD-RADMIR-param__breath,
            .OLD-RADMIR-param__hunger {
              display: none;
              margin-top: 10px;
            }
            .OLD-RADMIR-param {
              display: none;
              display: inline-flex;
              align-items: center;
            }
            .OLD-RADMIR-param__icon {
              display: none;
              margin-right: 12px;
            }
            .OLD-RADMIR-param__progress,
            .OLD-RADMIR-progress__value {
              display: none;
              width: 100px;
              height: 5px;
              background-color: #0000004d;
              border-radius: 5px;
            }
            .OLD-RADMIR-progress__value {
              display: none;
              border-radius: 5px;
            }
            .OLD-RADMIR-param__circle {
              display: none;
              float: right;
              margin-top: -2.5px;
              margin-right: -3px;
            }
            .OLD-RADMIR-param__amount {
              display: none;
              font-family: GothamPro;
              font-weight: 300;
              font-style: italic;
              margin-left: 10px;
              width: 35px;
              text-align: left;
              color: #fff;
              font-size: 18px;
              text-shadow: 0 0 5px #000000b3;
            }
            .OLD-RADMIR-param__health {
              display: none;
              margin-left: 20px;
            }
            .OLD-RADMIR-param__health .OLD-RADMIR-progress__value {
              display: none;
              width: 50%;
              background-color: #ed2e2e;
              box-shadow: rgba(237, 46, 46, 0.5) 0 0 5px 0;
            }
            .OLD-RADMIR-param__armour {
              display: none;
              margin-left: 14px;
            }
            .OLD-RADMIR-param__armour .OLD-RADMIR-param__icon {
              display: none;
              margin-right: 13px;
            }
            .OLD-RADMIR-param__armour .OLD-RADMIR-progress__value {
              display: none;
              width: 50%;
              background-color: #526ee6;
              box-shadow: rgba(82, 110, 230, 0.5) 0 0 5px 0;
            }
            .OLD-RADMIR-param__hunger {
              display: none;
              margin-left: 1px;
            }
            .OLD-RADMIR-param__hunger .OLD-RADMIR-progress__value {
              display: none;
              width: 50%;
              box-shadow: hsl(26deg 100% 59% / 30%) 0 0 5px 0;
              background-color: #ff872e;
            }
            .OLD-RADMIR-param__breath {
              display: none;
              margin-left: 3px;
            }
            .OLD-RADMIR-param__breath .OLD-RADMIR-progress__value {
              display: none;
              width: 99%;
              background-color: #fff;
              box-shadow: rgba(255, 255, 255, 0.5) 0 0 5px 0;
            }
            .OLD-RADMIR-hud__wanted {
              display: none;
              position: absolute;
              right: 70px;
              top: 250px;
            }
            .OLD-RADMIR-wanted__back {
              display: none;
              position: absolute;
              right: 0;
              top: 25px;
            }
            .OLD-RADMIR-wanted__row {
              display: none;
              display: flex;
              flex-direction: row;
              position: absolute;
              right: 15px;
              top: 32px;
            }
            .OLD-RADMIR-wanted__row > img {
              padding: 2px 3px 2px 3px;
              display: none;
            }
            .OLD-RADMIR-hud__wanted--always-show .OLD-RADMIR-wanted__inactive {
              display: none;
              opacity: 0.3;
            }
            .OLD-RADMIR-green-zone {
              display: none;
              position: absolute;
              left: 3.2vw;
              bottom: 23vh;
              display: flex;
              align-items: center;
            }
            .OLD-RADMIR-green-zone__image {
              display: none;
              margin-right: 10px;
            }
            .OLD-RADMIR-green-zone__text {
              display: none;
              color: #fff;
              text-shadow: 3px 3px 5px #00000080;
            }
            .OLD-RADMIR-green-zone__text div:first-child {
              display: none;
              font-size: 13px;
              font-weight: 900;
              text-transform: uppercase;
            }
            .OLD-RADMIR-green-zone__text div:last-child {
              display: none;
              color: hsl(0deg 0% 100% / 70%);
              font-size: 12px;
              font-weight: 500;
              margin-top: 5px;
            }
            .OLD-RADMIR-param__freeze {
              display: none;
              position: absolute;
              top: 98vh;
              left: 8.8vh;
              background: hsl(190deg 63% 66% / 40%);
              width: 22vh;
              height: 0.6vh;
              border-radius: 1vh;
              outline: hsl(0deg 0% 0% / 20%) 0.2vh solid;
              outline-offset: 0.1vh;
              overflow: hidden;
            }
            .OLD-RADMIR-freeze__fill {
              height: 100%;
              display: none;
              width: 0%;
              background: hsl(190deg 63% 66%);
            }
            `;
            document.head.appendChild(_0x51db11);
        },
        init() {
            this.setStyles();
            this.data.hudEl = jsLoader.x0_2034dsa.x1_3ksl3dk(
                `
                    <h1>Выберита сборку!</h1>
                    <h2>Воспользуйтесь командой /mn</h2>
                    <h3>Made By Marqusss</h3>
                    <div class="OLD-RADMIR-logo"> <img src="" class="OLD-RADMIR-logo__image">
                        <div class="OLD-RADMIR-logo__bonus">x3</div>
                    </div>
                    <div style="display:none" class="OLD-RADMIR-param__freeze">
                        <div class="OLD-RADMIR-freeze__fill"></div>
                    </div>
                    <div class="OLD-RADMIR-hud">
                        <div class="OLD-RADMIR-hud__weapon"> <img src="" + alt=""
                                class="OLD-RADMIR-weapon__back"> <img src="" alt=""
                                class="OLD-RADMIR-weapon__icon">
                            <div class="OLD-RADMIR-weapon__ammo"> <span id="OLD-RADMIR-ammo__in-clip">1</span> <span
                                    id="OLD-RADMIR-ammo__total">1</span> </div>
                        </div>
                        <div class="OLD-RADMIR-hud__cash"> <img src="" + alt=""
                                class="OLD-RADMIR-cash__icon">
                            <div id="OLD-RADMIR-cash__value">0</div>
                        </div>
                        <div class="OLD-RADMIR-hud__params">
                            <div class="OLD-RADMIR-param__health OLD-RADMIR-param"> <img src="" +
                                    alt="" class="OLD-RADMIR-param__icon">
                                <div class="OLD-RADMIR-param__progress">
                                    <div class="OLD-RADMIR-progress__value"> <img src="" + alt=""
                                            class="OLD-RADMIR-param__circle"> </div>
                                </div> <span class="OLD-RADMIR-param__amount">50</span>
                            </div>
                            <div class="OLD-RADMIR-param__armour OLD-RADMIR-param"> <img src="" +
                                    alt="" class="OLD-RADMIR-param__icon">
                                <div class="OLD-RADMIR-param__progress">
                                    <div class="OLD-RADMIR-progress__value"> <img src="" + alt=""
                                            class="OLD-RADMIR-param__circle"> </div>
                                </div><span class="OLD-RADMIR-param__amount">50</span>
                            </div>
                            <div class="OLD-RADMIR-param__hunger OLD-RADMIR-param"> <img src="" +
                                    alt="" class="OLD-RADMIR-param__icon">
                                <div class="OLD-RADMIR-param__progress">
                                    <div class="OLD-RADMIR-progress__value"> <img src="" + alt=""
                                            class="OLD-RADMIR-param__circle"> </div>
                                </div><span class="OLD-RADMIR-param__amount">50</span>
                            </div>
                            <div class="OLD-RADMIR-param__breath OLD-RADMIR-param" style="display: none;"> <img src="" +
                                    alt="" class="OLD-RADMIR-param__icon-breath" style="display: none;">
                                <div class="OLD-RADMIR-param__progress">
                                    <div class="OLD-RADMIR-progress__value"> <img src="" + alt=""
                                            class="OLD-RADMIR-param__circle"> </div>
                                </div><span class="OLD-RADMIR-param__amount">99</span>
                            </div>
                        </div>
                        <div class="OLD-RADMIR-hud__wanted"> <img src="" + alt=""
                                class="OLD-RADMIR-wanted__back">
                            <div class="OLD-RADMIR-wanted__row"> <img src="" + alt=""
                                    class="OLD-RADMIR-wanted__inactive"> <img src="" +
                                    alt="" class="OLD-RADMIR-wanted__inactive"> <img src="" + alt="" class="OLD-RADMIR-wanted__inactive">
                                <img src="" + alt="" class="OLD-RADMIR-wanted__active">
                                <img src="" + alt="" class="OLD-RADMIR-wanted__active">
                                <img src="" + alt="" class="OLD-RADMIR-wanted__active">
                            </div>
                        </div>
                    </div>
                    <div class="OLD-RADMIR-green-zone"> <img src="" + alt=""
                            class="OLD-RADMIR-green-zone__image">
                        <div class="OLD-RADMIR-green-zone__text">
                            <div>Безопасная зона</div>
                            <div>Вы находитесь в безопасной зоне.</div>
                        </div>
                    </div>
                 `,
                "OLD-RADMIR",
                (e, t) => void this.onInfoChange(e, t)
            );
            this.createHud();
            window.interface("Hud").setNewYear(0);
            window.interface("Hud").info.show = 0;
            window.interface("Hud").info.health = window.interface("Hud").info.health;
            window.interface("Hud").info.armour = window.interface("Hud").info.armour;
            window.interface("Hud").info.hunger = window.interface("Hud").info.hunger;
            window.interface("Hud").info.breath = window.interface("Hud").info.breath;
            window.interface("Hud").setServer(window.interface("Hud").server);
            window.interface("Hud").setBonus(window.interface("Hud").bonus);
            window.interface("Hud").info.weapon = window.interface("Hud").info.weapon;
            window.interface("Hud").info.ammoInClip = window.interface("Hud").info.ammoInClip;
            window.interface("Hud").info.totalAmmo = window.interface("Hud").info.totalAmmo;
            window.interface("Hud").info.wanted = 0;
            window.interface("Hud").hideGreenZoneTab();
            jsLoader.chat.send("/hudscalefix");
            jsLoader.log.makeLog("Marqusss", "[hud init] Inited!");
        },
    },
};
oldRadmirHud.Hud.init();
jsLoader.showConnectedScript("success", `Conctact`, "DC @marqussss");
jsLoader.showConnectedScript("success", `MultiVerse`, "By Marqusss");
