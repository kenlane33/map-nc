export const propsByRegion = {
  NC: {
    viewBox: "0 0 989.98 380",
    transform: "translate(-3850 -2640) rotate(10) scale(5.8)",
    enabled: [
      "Ashe",
      "Buncombe",
      "Gates",
      "Mecklenburg",
      "New Hanover",
      "Robeson",
      "Wake"
    ]
  }
};

//-----------////////////////////---------------------
export const regionAbbreviations = JSON.parse(
  `{
  "NC": "North Carolina"
  }`
);

//-----------//////////////---------------------
const partsByRegionHash = {
  NC: `[
  {"id":"c37043","d":"m751.68 363.42 1.6824-0.0555 3.5254 3.1565-1.2159 0.194-7.1725 1.045-1.2801 0.167 1.7338-3.0481 2.727-1.4589","name":"Clay","state":"NC"},
  {"id":"c37113","d":"m758.53 358.43 5.2951 7-6.9336 1.091-3.5254-3.1565-1.6824 0.0555 0.3851-2.209 0.32091-0.765 0.13015-0.09 3.9758-1.228 2.0343-0.699","name":"Macon","state":"NC"},
  {"id":"c37175","d":"m769.21 354.82 2.4087 2.145 0.51346 0.589 0.2086 0.657 0.12123 0.844 0.44394 1.342 0.1355 0.227 0.24068 0.126-3.2947 2.25-2.4176 0.619-1.9612 0.947-0.42428-0.96678 1.2034-5.3232 2.0087-0.99465 0.81359-2.4614","name":"Transylvania","state":"NC"},
  {"id":"c37099","d":"m760.8 353.84 5.5929 4.436-1.2034 5.3232 0.42428 0.96678-1.7846 0.863-5.2951-7-0.36947-3.1837 2.6355-1.4053","name":"Jackson","state":"NC"},
  {"id":"c37087","d":"m764 346.87 1.831 2.457 0.46884 1.2357 0.88619-0.12109 1.1271 1.0919-0.0903 2.5958 0.98491 0.69369-0.81359 2.4614-2.0087 0.99465-5.5929-4.436-1.8257-3.992-0.0802-0.437 5.1133-2.544","name":"Haywood","state":"NC"},
  {"id":"c37173","d":"m758.97 349.85 1.8257 3.992-2.6355 1.4053 0.36947 3.1837-2.0343 0.699-3.9758 1.228-0.13015 0.09-0.33696-0.379-7e-3 -0.223 0.12836-0.41 0.0981-0.122 0.32983-0.199 0.43146-0.178 0.25851-0.145 0.3851-0.891 0.0874-0.571-0.016-0.249-0.0802-0.427-1.0519-0.07-5.8015 0.351 5.0206-3.18h0.42607l2.6262-0.271 0.22643-0.146 3.1896-2.525 0.66679-0.977","name":"Swain","state":"NC"},
  {"id":"c37075","d":"m746.81 356.93 5.8015-0.351 1.0519 0.07 0.0802 0.427 0.016 0.249-0.0874 0.571-0.3851 0.891-0.25851 0.145-0.43146 0.178-0.32983 0.199-0.0981 0.122-0.12836 0.41 7e-3 0.223 0.33696 0.379-0.32091 0.765-3.3821 0.738-1.2694 0.594h-0.18007l-0.67393-0.28-0.65609-1.262 0.75415-4.122 0.15333 0.05","name":"Graham","state":"NC"},
  {"id":"c37039","d":"m752.07 361.21-0.3851 2.209-2.727 1.4589-1.7338 3.0481-2.3035 0.289-3.5782 0.419-0.0695-5.079 1.5154-1.334 1.9808-0.05 0.70424-0.579 0.43502-0.594 0.65609 1.262 0.67393 0.28h0.18007l1.2694-0.594 3.3821-0.738","name":"Cherokee","state":"NC"},
  {"id":"c37121","d":"m779.13 337.42 2.4746 4.181-2.4746 2.409-0.52416-1.976-1.112-0.62044-0.47885-1.2869-1.0786 0.29855-1.7212-1.2376-1.1043-0.11865 3.2787-2.442 2.7403 0.793","name":"Mitchell","state":"NC"},
  {"id":"c37199","d":"m773.11 339.07 1.1043 0.11865 1.7212 1.2376 1.0786-0.29855 0.47885 1.2869 1.112 0.62044 0.52416 1.976-2.2018 3.125-2.8294-2.25-2.2963-3.421 1.3086-2.395","name":"Yancey","state":"NC"},
  {"id":"c37115","d":"m769.83 340.31-0.20401 1.2805 1.0464 0.65527 0.64185-0.6687 0.49475-0.11705 2.2963 3.421-1.7276 0.628-1.0127 0.636-0.59369 0.425-1.1571 0.841-2.3463 1.53-1.4316 0.385-1.831-2.457 0.71136-3.625 0.83082-0.21 1.6224-1.519 1.1553-1.141 0.3227-0.234 0.46711-0.336 0.0874-0.01 0.27635 0.175 0.35122 0.337","name":"Madison","state":"NC"},
  {"id":"c37021","d":"m776.93 347.13 0.0414 2.6574 2.4956 1.1046-1.5743 1.64-1.3407-0.563-1.2141 0.852-1.535 0.827-1.3906 0.516-0.85221-0.07-0.57765-0.13-0.19434-0.101-0.36014-0.06-0.56873 0.223-0.17829 0.138-0.47246 0.666-0.98491-0.69369 0.0903-2.5958-1.1271-1.0919-0.88619 0.12109-0.46884-1.2357 1.4316-0.385 2.3463-1.53 1.1571-0.841 0.59369-0.425 1.0127-0.636 1.7276-0.628 2.8294 2.25","name":"Buncombe","state":"NC"},
  {"id":"c37089","d":"m777.89 352.53 0.32983 1.696-1.4139 2.1142 0.29964 2.3998-3.8278 2.009-0.24068-0.126-0.1355-0.227-0.44394-1.342-0.12123-0.844-0.2086-0.657-0.51346-0.589-2.4087-2.145 0.47246-0.666 0.17829-0.138 0.56873-0.223 0.36014 0.06 0.19434 0.101 0.57765 0.13 0.85221 0.07 1.3906-0.516 1.535-0.827 1.2141-0.852 1.3407 0.563","name":"Henderson","state":"NC"},
  {"id":"c37149","d":"m784.31 358.15-4.5962 0.475-2.5994 0.119-0.29964-2.3998 1.4139-2.1142 1.1-0.387 0.71493-0.257 0.16937 0.02 0.57944 0.252 0.27278 0.18 2.9382 2.478 0.1872 0.305 0.11945 1.326","name":"Polk","state":"NC"},
  {"id":"c37161","d":"m788.06 348.39 0.57765 5.126-0.57765 3.249-0.016 0.987-1.9772 0.202-1.7615 0.192-0.11945-1.326-0.1872-0.305-2.9382-2.478-0.27278-0.18-0.57944-0.252-0.16937-0.02-0.71493 0.257-1.1 0.387-0.32983-1.696 1.5743-1.64 3.0129-1.0408 0.5781 0.4988 2.0461-0.53955 0.5423-0.93342 1.0634-1.0416 1.3488 0.55665","name":"Rutherford","state":"NC"},
  {"id":"c37111","d":"m781.61 341.6 0.53664-1.198 0.13015 0.07 0.13728 0.175 0.40828 0.659 0.10341 0.218 0.1551 0.513-0.12301 0.869-1.2149 1.1031 2.5805 1.6759 1.3264 3.193-0.5423 0.93342-2.0461 0.53955-0.5781-0.4988-3.0129 1.0408-2.4956-1.1046-0.0414-2.6574 2.2018-3.125 2.4746-2.409","name":"McDowell","state":"NC"},
  {"id":"c37011","d":"m781.29 333.38 0.19255-0.555 0.63693 0.9325-0.53588 0.75207 0.48988 0.71885 0.81465-0.25548 1.1421 1.5821 1.3678 0.95206-0.77411 2.4619-2.1196-0.4321-0.36394 0.8671-0.53664 1.198-2.4746-4.181 2.1608-4.041","name":"Avery","state":"NC"},
  {"id":"c37189","d":"m784.73 329.98 1.6313 0.644 1.0679 0.941 0.7078 0.516 1.5333 0.602 0.41193 1.497-1.2142 1.497-4.8369 0.87-1.1421-1.5821-0.81465 0.25548-0.48988-0.71885 0.53588-0.75207-0.63693-0.9325 0.1355-0.369 0.84508-0.947 0.9164-0.627 0.0232-0.02 0.0963-0.06 0.1141 0.263 0.48138 0.154 0.28704-0.01h0.0339l0.38332-0.129-0.0695-1.095","name":"Watauga","state":"NC"},
  {"id":"c37003","d":"m798.54 335.85 0.55512 2.5908-1.1203 3.7332-1.4092-0.69117-2.7039 0.94617-0.60261-4.597 0.99663-0.825 0.53842-0.21 0.82725-0.264 0.29774 0.07 1.2676-0.303 1.0216-0.291 0.33161-0.16","name":"Alexander","state":"NC"},
  {"id":"c37009","d":"m784.82 325.27 5.9227-0.596 0.0731 0.457 1.2034 1.697 0.65253 0.554 0.1765 0.289 0.41006 0.858 0.10341 0.691-2.3452 0.45252 0.24213 1.6427-1.5856 1.3708-1.5333-0.602-0.7078-0.516-1.0679-0.941-1.6313-0.644 0.0874-4.713","name":"Ashe","state":"NC"},
  {"id":"c37005","d":"m798.97 323.68-0.60261 3.857-0.16046 0.658-0.84508 0.135-0.35301-0.39-0.0713-0.394-0.80408-0.403-0.14263-0.02-1.166 0.346-1.4637 1.757-0.10341-0.691-0.41006-0.858-0.1765-0.289-0.65253-0.554-1.2034-1.697-0.0731-0.457 8.228-0.997","name":"Alleghany","state":"NC"},
  {"id":"c37193","d":"m793.36 329.22 1.4637-1.757 1.166-0.346 0.14263 0.02 0.80408 0.403 0.0713 0.394 0.35301 0.39 0.84508-0.135 0.16046-0.658 1.6168 1.5068 0.6991 1.9962 0.49742 4.163-2.6422 0.651-0.33161 0.16-1.0216 0.291-1.2676 0.303-0.29774-0.07-0.82725 0.264-0.53842 0.21-0.99663 0.825-4.3876-2.153 1.2142-1.497-0.41193-1.497 1.5856-1.3708-0.24213-1.6427 2.3452-0.45252","name":"Wilkes","state":"NC"},
  {"id":"c37027","d":"m784.03 336.55 4.8369-0.87 4.3876 2.153 0.60261 4.597-0.44215 0.741-0.21573 0.282-0.39579 0.03-1.4709-0.4473-1.4709 0.4473-3.5675-2.161-1.5172-1.158-0.15333-0.209 0.77411-2.4619-1.3678-0.95206","name":"Caldwell","state":"NC"},
  {"id":"c37023","d":"m784.63 339.97 0.15333 0.209 1.5172 1.158 3.5675 2.161 1.4709-0.4473 1.4709 0.4473 0.39579-0.03 0.21573-0.282-2.4265 5.039-0.041 0.11-2.8918 0.07-1.3488-0.55665-1.0634 1.0416-1.3264-3.193-2.5805-1.6759 1.2149-1.1031 0.12301-0.869-0.1551-0.513-0.10341-0.217-0.40828-0.66-0.13728-0.175-0.13015-0.07 0.36394-0.8671 2.1196 0.4321","name":"Burke","state":"NC"},
  {"id":"c37045","d":"m790.95 348.32 2.0004 3.079 2.4893 2.5025 0.7894 2.9945-0.72385 0.07-7.4631 0.788 0.016-0.987 0.57765-3.249-0.57765-5.126 2.8918-0.07","name":"Cleveland","state":"NC"},
  {"id":"c37071","d":"m792.95 351.4 9.2816-1.019-0.84476 2.7144 0.14409 3.3186-5.3022 0.483-0.7894-2.9945-2.4893-2.5025","name":"Gaston","state":"NC"},
  {"id":"c37109","d":"m801.62 347.04 0.45641 1.333 0.16046 2.01-9.2816 1.019-2.0004-3.079 0.041-0.11 10.624-1.173","name":"Lincoln","state":"NC"},
  {"id":"c37035","d":"m793.86 342.43 2.7039-0.94617 1.4092 0.69117 1.1972 1.2824 1.1972 0.10665 0.67571 0.675 0.8843 1.15-0.312 1.648-10.624 1.173 2.4265-5.039 0.44215-0.741","name":"Catawba","state":"NC"},
  {"id":"c37097","d":"m801.18 335.2 3.4695-0.458 0.45998 4.58-0.35479 2.972-0.15154 1.279 1.0608 2.893 0.11946 0.433 0.0731 0.41-0.86825 0.138-2.6185 0.18527-0.29824 0.73773-0.45641-1.333 0.312-1.648-0.8843-1.15-0.67571-0.675-1.1972-0.10665-1.1972-1.2824 1.1203-3.7332-0.55512-2.5908 2.6422-0.651","name":"Iredell","state":"NC"},
  {"id":"c37119","d":"m802.07 348.37 0.29824-0.73773 2.6185-0.18527-0.016 0.167 0.025 0.154 0.71493 2.039 2.3391 2.765 2.3534 0.997-4.5891 5.6-1.494-1.526-0.69755-0.3075-1.5117 1.5165-0.55086-0.36675 0.40924-1.4143-0.4393-0.65798-0.14409-3.3186 0.84476-2.7144-0.16046-2.01","name":"Mecklenburg","state":"NC"},
  {"id":"c37159","d":"m805.11 339.32 4.9653 1.769 2.4033 0.158 2.8045 2.791 0.75415 1.656-2.0646 0.374-8.1156 1.239-0.0731-0.41-0.11946-0.433-1.0608-2.893 0.15154-1.279 0.35479-2.972","name":"Rowan","state":"NC"},
  {"id":"c37059","d":"m804.65 334.74 3.596-0.476 2.118 1.367 0.33696 0.186 0.10697 0.16 0.21573 0.603 0.0927 0.635-0.16402 1.356-0.69176 0.467-0.18542 2.051-4.9653-1.769-0.45998-4.58","name":"Davie","state":"NC"},
  {"id":"c37197","d":"m808.32 329.68 0.41738 2.3437-1.0221 0.79509 0.53523 1.4482-3.596 0.476-3.4695 0.458-0.49742-4.163 1.5743-0.98 2.1624 0.10575 0.52798-1.0228 1.0876-0.02 0.34099 0.66984 1.3527-0.38084 0.38688 0.121 0.19968 0.145","name":"Yadkin","state":"NC"},
  {"id":"c37171","d":"m804.23 322.91 3.1414-0.337 0.87717 6.636 0.0695 0.467-0.19968-0.145-0.38688-0.121-1.3527 0.38084-0.34099-0.66984-1.0876 0.02-0.52798 1.0228-2.1624-0.10575-1.5743 0.98-0.6991-1.9962-1.6168-1.5068 0.60261-3.857 1.166-0.121 4.0917-0.643","name":"Surry","state":"NC"},
  {"id":"c37169","d":"m814.87 321.51 0.9574 6.539-7.5754 1.165-0.87717-6.636 7.0209-0.988 0.47424-0.08","name":"Stokes","state":"NC"},
  {"id":"c37067","d":"m808.25 329.21 7.5754-1.165 0.81834 5.659-3.3503 0.19444 0.0784 0.73075-1.5881 0.34767-1.4157 0.65414-2.118-1.367-0.53523-1.4482 1.0221-0.79509-0.41738-2.3437-0.0695-0.467","name":"Forsyth","state":"NC"},
  {"id":"c37057","d":"m810.37 335.63 1.4157-0.65414 1.5881-0.34767-0.0784-0.73075 3.3503-0.19444 0.27278 2.065 1.248 9.529-2.1234 0.396-0.75415-1.656-2.8045-2.791-2.4033-0.158 0.18542-2.051 0.69176-0.467 0.16402-1.356-0.0927-0.635-0.21573-0.603-0.10697-0.16-0.33696-0.186","name":"Davidson","state":"NC"},
  {"id":"c37167","d":"m813.97 346.07 2.0646-0.374 1.4227 0.722 0.11232 0.07 0.86113 1.366 0.34409 0.717-0.12382 2.077 1.0153 2.077 0.0267 0.135-0.0339 0.209-0.26565 0.538-3.9188-0.586-2.0788 1.2448-2.0788-0.30582 2.6529-7.891","name":"Stanly","state":"NC"},
  {"id":"c37025","d":"m813.97 346.07-2.6529 7.891-0.91461-0.392-2.3534-0.997-2.3391-2.765-0.71493-2.039-0.025-0.154 0.016-0.167 0.86825-0.138 8.1156-1.239","name":"Cabarrus","state":"NC"},
  {"id":"c37179","d":"m815.48 353.02 0.6561 8.853-4.4732 0.664-4.0115 0.592-0.37797-0.07-9e-3 -0.217-0.12837-2.346-1.3175-1.327 4.5891-5.6 0.91461 0.392 2.0788 0.30582 2.0788-1.2448","name":"Union","state":"NC"},
  {"id":"c37007","d":"m819.4 353.61 0.0481 0.202 0.21751 0.483 0.87717 0.344 0.4885 0.05 0.0981-0.02 0.11232-0.1 0.0464-0.06 0.0571-0.234 0.37084-0.394 0.2389-0.144h0.29774l0.33875 0.419 0.53129 0.859 1.3871 3.318v0.121l-0.18185 0.435-0.89322 1.929-7.2973 1.057-0.6561-8.853 3.9188 0.586","name":"Anson","state":"NC"},
  {"id":"c37157","d":"m820.52 320.56 3.6959-0.618 0.78089 6.702 0.0214 0.192-9.1907 1.214-0.9574-6.539 5.6499-0.951","name":"Rockingham","state":"NC"},
  {"id":"c37081","d":"m815.82 328.05 9.1907-1.214 1.191 7.829-9.2905 1.109-0.27278-2.065-0.81834-5.659","name":"Guilford","state":"NC"},
  {"id":"c37151","d":"m826.21 334.66 0.21572 1.285 1.0608 7.527-3.8956 0.765-5.4235 1.061-1.248-9.529 9.2905-1.109","name":"Randolph","state":"NC"},
  {"id":"c37123","d":"m823.59 344.24 1.9362 4.919 0.0553 0.289 0.27277 0.44 1.0537 1.232 0.43502 0.353 0.47424 0.209-1.8738 0.105-2.5798 0.2-0.9788 0.66-1.9202 0.843-0.41184 0.09-0.65075 0.03 0.26565-0.538 0.0339-0.209-0.0267-0.135-1.0153-2.077 0.12382-2.077-0.34409-0.717-0.86113-1.366-0.11232-0.07-1.4227-0.722 2.1234-0.396 5.4235-1.061","name":"Montgomery","state":"NC"},
  {"id":"c37153","d":"m819.4 353.61 0.65075-0.03 0.41184-0.09 1.9202-0.843 0.9788-0.66 2.5798-0.2 1.8738-0.105 0.83572 0.5625 0.33922 1.4761 1.789-0.17233 0.37894 0.38376-0.90927 0.562-0.67571 0.611-0.30665 0.328-0.0963 0.909 0.0731 0.28 0.16938 0.266-0.26387 1.335-0.29061 0.619-0.97879 1.253-4.4447 0.724 0.89322-1.929 0.18185-0.435v-0.121l-1.3871-3.318-0.53129-0.859-0.33875-0.419h-0.29774l-0.2389 0.144-0.37084 0.394-0.0571 0.234-0.0464 0.06-0.11232 0.1-0.0981 0.02-0.4885-0.05-0.87717-0.344-0.21751-0.483-0.0481-0.202","name":"Richmond","state":"NC"},
  {"id":"c37165","d":"m834.02 358.23-0.0618 0.49058 0.57636 0.7158-1.7804 3.9056-4.8779-3.247 0.97879-1.253 0.29061-0.619 0.26387-1.335-0.16938-0.266-0.0731-0.28 0.0963-0.909 0.30665-0.328 0.67571-0.611 0.90927-0.562 2.142 1.848 0.72308 2.45","name":"Scotland","state":"NC"},
  {"id":"c37033","d":"m830.94 318.73 0.93957 6.879-1.8791 0.297-5.0045 0.739-0.78089-6.702 0.73097-0.136 2.2981-0.408 2.2428-0.412 1.453-0.257","name":"Caswell","state":"NC"},
  {"id":"c37001","d":"m824.99 326.64 5.0045-0.739 0.89194 7.5658 0.73939 0.77719 0.22774 0.66222-5.4355 1.0398-0.21572-1.285-1.191-7.829-0.0214-0.192","name":"Alamance","state":"NC"},
  {"id":"c37125","d":"m831.24 342.75 1.6272 2.8623 2.2862 1.3977-0.39489 1.3837 2.4612 0.9443 0.0481 0.421-2.9007-0.362-0.62757 0.545-0.88252 1.052-1.15 1.929-0.55269 1.006-0.37894-0.38376-1.789 0.17233-0.33922-1.4761-0.83572-0.5625-0.47424-0.209-0.43502-0.353-1.0537-1.232-0.27277-0.44-0.0553-0.289-1.9362-4.919 3.8956-0.765 3.7601-0.722","name":"Moore","state":"NC"},
  {"id":"c37093","d":"m831.16 353.93 0.55269-1.006 1.15-1.929 0.88252-1.052 0.62757-0.545 2.9007 0.362 2.0663 4.812-2.1394 2.885-1.0109 0.465-2.1644 0.306-0.72308-2.45-2.142-1.848","name":"Hoke","state":"NC"},
  {"id":"c37155","d":"m839.34 354.57 2.9489 2.259 2.3694 2.988 0.0713 0.339-0.18364 4.098-0.24782 0.491-0.8843 0.864-1.1179 2.404-0.94849 1.574-8.3331-6.073-0.25495-0.176 1.7804-3.9056-0.57636-0.7158 0.0618-0.49058 2.1644-0.306 1.0109-0.465 2.1394-2.885","name":"Robeson","state":"NC"},
  {"id":"c37047","d":"m856.05 364.51 1.9291 0.639-1.1089 3.524-2.25 1.27-2.0093 0.691-0.21573 0.02-0.14441 0.05-0.47424 0.579-0.85935 3.159-0.26743 1.79-9.3048-6.646 0.94849-1.574 1.1179-2.404 0.8843-0.864 0.78625 0.312h0.16046l0.39401-0.07 2.0485-0.531 2.3302 0.497 2.6119 0.739 2.0646-0.152 1.3586-1.029","name":"Columbus","state":"NC"},
  {"id":"c37019","d":"m857.98 365.15 2.5602 0.11 1.5297 1.808 1.109 2.603 0.3851 1.432 0.0891 0.495 0.36906 2.47-0.18943 1.5838-0.65131 0.29894-0.50176-0.66174-1.5083-0.129h-0.80586l-0.76307 0.1-1.8328 0.385-1.8952 0.595-0.0642 0.02h-7e-3l-2.1787 1.262-0.54021 0.442-2.4336-1.737 0.26743-1.79 0.85935-3.159 0.47424-0.579 0.14441-0.05 0.21573-0.02 2.0093-0.691 2.25-1.27 1.1089-3.524","name":"Brunswick","state":"NC"},
  {"id":"c37129","d":"m866.52 365.05-0.34588 0.52-0.32091 0.701-0.85221 2.113-0.13729 0.547-0.32091 1.588-0.0303 0.195-0.49207 3.361-0.36906-2.47-0.0891-0.495-0.3851-1.432-1.109-2.603-1.5297-1.808 1.7864-1.095 1.4477-0.69h0.74702l-0.1462 0.226 0.0802 0.177 0.29774 0.288 1.2944 0.885h0.47424","name":"New Hanover","state":"NC"},
  {"id":"c37017","d":"m849.69 354.96 5.723 6.042-0.2496 0.426 0.0499 0.111 0.4582 0.572 0.32805 0.201 0.56338 0.07 0.68106 0.361-1.1963 1.767-1.3586 1.029-2.0646 0.152-2.6119-0.739-2.3302-0.497-2.0485 0.531-0.39401 0.07h-0.16046l-0.78625-0.312 0.24782-0.491 0.18364-4.098-0.0713-0.339-2.3694-2.988 1.0269-0.483 0.77377-0.2 4.9154-0.941 0.51347-0.129 0.1765-0.119","name":"Bladen","state":"NC"},
  {"id":"c37051","d":"m845.8 346.52-0.33874 3.664v0.17l0.45106 0.989 0.59548 1.109 0.1355 0.209 3.0523 2.298-0.1765 0.119-0.51347 0.129-4.9154 0.941-0.77377 0.2-1.0269 0.483-2.9489-2.259-2.0663-4.812-0.0481-0.421 0.57052-0.255 3.3108-1.519 1.6313-0.877 0.55448-0.127 2.5067-0.04","name":"Cumberland","state":"NC"},
  {"id":"c37037","d":"m837.92 333.32 0.0374 0.587-0.60974 5.577 1.5832 0.345-0.76485 1.584-1.7971-1.416-0.35657-0.233-0.19077-0.09-0.4992-0.139-0.37084 0.03-0.32983 0.107-0.77733 1.194-0.82904 0.726-1.3175 0.931-0.4582 0.224-3.7601 0.722-1.0608-7.527 5.4355-1.0398-0.22774-0.66222 4.2985-0.459 1.995-0.467","name":"Chatham","state":"NC"},
  {"id":"c37085","d":"m838.93 339.83 4.0418 0.78 3.9223 4.072-1.1018 1.841-2.5067 0.04-0.55448 0.127-1.6313 0.877-3.3108 1.519-0.57052 0.255-2.4612-0.9443 0.39489-1.3837 3.013-5.6 0.76485-1.584","name":"Harnett","state":"NC"},
  {"id":"c37105","d":"m831.24 342.75 0.4582-0.224 1.3175-0.931 0.82904-0.726 0.77733-1.194 0.32983-0.107 0.37084-0.03 0.4992 0.139 0.19077 0.09 0.35657 0.233 1.7971 1.416-3.013 5.6-2.2862-1.3977-1.6272-2.8623","name":"Lee","state":"NC"},
  {"id":"c37135","d":"m831.88 325.61 3.6923-0.594 0.35836 8.775-4.2985 0.459-0.73939-0.77719-0.89194-7.5658 1.8791-0.297","name":"Orange","state":"NC"},
  {"id":"c37145","d":"m830.94 318.73 6.1723-1.116 1.1731 6.982-2.7135 0.419-3.6923 0.594-0.93957-6.879","name":"Person","state":"NC"},
  {"id":"c37063","d":"m838.28 324.59 0.25816 3.2202 1.3892 0.35484-0.12339 0.84341 1.2716 0.31559-0.0802 1.06-0.64938 1.3-0.92993 0.12492-0.1162 1.2751-1.3799 0.233-1.995 0.467-0.35836-8.775 2.7135-0.419","name":"Durham","state":"NC"},
  {"id":"c37141","d":"m857.31 356.69 7.9783-1.503 4.2521 5.768-3.022 4.092h-0.47424l-1.2944-0.885-0.29774-0.289-0.0802-0.176 0.1462-0.226h-0.74702l-1.4477 0.69-1.7864 1.095-2.5602-0.11-1.9291-0.639 1.1963-1.767-0.68106-0.361-0.56338-0.07-0.32805-0.201-0.4582-0.573-0.0499-0.11 0.2496-0.426 1.897-4.315","name":"Pender","state":"NC"},
  {"id":"c37163","d":"m846.9 344.68 1.4196 0.70274 3.0394-0.85474 3.0041 1.712 0.54734 2.483 0.99484 3.976-0.27278 3.947 1.3354 0.401 0.1141-0.06 0.23178-0.296-1.897 4.315-5.723-6.042-3.0523-2.298-0.1355-0.209-0.59548-1.109-0.45106-0.989v-0.17l0.33874-3.664 1.1018-1.841","name":"Sampson","state":"NC"},
  {"id":"c37191","d":"m854.46 336.9 4.45-0.56 1.2141 4.546 0.32983 4.468-6.0921 0.892-3.0041-1.712 0.72206-1.054 1.4548-2.449 0.92531-4.131","name":"Wayne","state":"NC"},
  {"id":"c37101","d":"m851.5 334.04 0.79694 0.851 0.97345 1.818 1.1892 0.191-0.92531 4.131-1.4548 2.449-0.72206 1.054-3.0394 0.85474-1.4196-0.70274-3.9223-4.072 2.5299-3.543 2.578-2.87 1.8988-1.929 1.5172 1.768","name":"Johnston","state":"NC"},
  {"id":"c37183","d":"m839.93 328.17 3.8813 0.451 1.0519 0.249 1.3247 0.412 2.4996 1.405 0.64361 0.537 0.60261 0.813 0.0481 0.232-1.8988 1.929-2.578 2.87-2.5299 3.543-4.0418-0.78-1.5832-0.345 0.60974-5.577-0.0374-0.587 1.3799-0.233 0.1162-1.2751 0.92993-0.12492 0.64938-1.3 0.0802-1.06-1.2716-0.31559 0.12339-0.84341","name":"Wake","state":"NC"},
  {"id":"c37077","d":"m838.23 317.39 4.9992-0.933-0.61152 0.781-0.0481 0.451 0.15333 1.493 0.65074 3.487 0.44929 2.147 0.2496 0.135-0.25673 3.664-3.8813-0.451-1.3892-0.35484-0.25816-3.2202-1.1731-6.982 1.1161-0.217","name":"Granville","state":"NC"},
  {"id":"c37181","d":"m843.22 316.46 2.3944-0.481 1.494 6.26-0.56199 1.0275-0.96058 0.32999-0.33779 1.1521-1.1848 0.20543-0.2496-0.135-0.44929-2.147-0.65074-3.487-0.15333-1.493 0.0481-0.451 0.61152-0.781","name":"Vance","state":"NC"},
  {"id":"c37185","d":"m850.62 315.02 2.6369-0.523 0.19968 0.861-0.62579 7.289-5.7141-0.41-1.494-6.26 4.9974-0.957","name":"Warren","state":"NC"},
  {"id":"c37069","d":"m852.83 322.65-2.8455 9.617-0.0481-0.232-0.60261-0.813-0.64361-0.537-2.4996-1.405-1.3247-0.412-1.0519-0.249 0.25673-3.664 1.1848-0.20543 0.33779-1.1521 0.96058-0.32999 0.56199-1.0275 5.7141 0.41","name":"Franklin","state":"NC"},
  {"id":"c37127","d":"m858.63 322.71-0.0499 1.116-0.75237 3.794-0.30666 2.049-6.0208 4.371-1.5172-1.768 2.8455-9.617 1.4504 0.015 0.69688 0.79746 2.2618-0.50664 1.3924-0.24582","name":"Nash","state":"NC"},
  {"id":"c37131","d":"m866.48 311.86 0.36137 0.716 0.77029-0.0596 0.52463 0.77564-0.93054 0.41808 0.19956 2.1869-0.35479 2.931-1.4987 1.1181 0.35228 0.96388-0.10697 0.104-0.18542-0.03-1.5654-0.665-0.79163-0.97238-1.0328-1.31-2.2626 0.73978 0.0524-1.1894-0.32805-1.455-1.8256-0.98-4.3235 0.07-0.0802 0.144-0.19968-0.861 2.3855-0.456 8.4775-1.672 2.3623-0.516","name":"Northampton","state":"NC"},
  {"id":"c37083","d":"m853.45 315.36 0.0802-0.144 4.3235-0.07 1.8256 0.98 0.32805 1.455-0.0524 1.1894 2.2626-0.73978 1.0328 1.31 0.79163 0.97238 1.5654 0.665 0.18542 0.03 0.10697-0.104 1.0942 1.2278-1.3134 1.0312-1.043 1.854-0.37976 0.105-1.856-0.428-0.31914-0.688-0.98949-0.531-2.4675-0.772-1.3924 0.24582-2.2618 0.50664-0.69688-0.79746-1.4504-0.015 0.62579-7.289","name":"Halifax","state":"NC"},
  {"id":"c37065","d":"m864.64 325.02 1.774 4.026-0.77911-0.168-1.3496 1.02-0.3851 0.658-0.53129 0.685-1.9701 2.144-1.2997-0.996-0.83795-1.689-1.7419-1.035 0.30666-2.049 0.75237-3.794 0.0499-1.116 2.4675 0.772 0.98949 0.531 0.31914 0.688 1.856 0.428 0.37976-0.105","name":"Edgecombe","state":"NC"},
  {"id":"c37195","d":"m857.52 329.66 1.7419 1.035 0.83795 1.689 1.2997 0.996-0.60083 0.708-1.8898 2.243-4.45 0.56-1.1892-0.191-0.97345-1.818-0.79694-0.851 6.0208-4.371","name":"Wilson","state":"NC"},
  {"id":"c37079","d":"m860.8 334.09 5.1044 4.324-1.4816 1.317-1.15 0.901-0.60261 0.271-0.16581 0.03-0.33874-0.385-2.0414 0.328-1.2141-4.546 1.8898-2.243","name":"Greene","state":"NC"},
  {"id":"c37107","d":"m867.85 340.07-1.0234 2.837-1.0109-0.138 0.61153 1.593-9e-3 0.151-1.2284 2.427-2.0806 1.905-2.6529-3.496-0.32983-4.468 2.0414-0.328 0.33874 0.385 0.16581-0.03 0.60261-0.271 1.15-0.901 1.4816-1.317 1.9433 1.654","name":"Lenoir","state":"NC"},
  {"id":"c37103","d":"m866.82 342.91 0.19433 0.02 5.625 2.241 0.57051 0.305 0.69889-0.426 0.20859 0.04 0.11411 0.137 0.33696 1.043 0.69889 4.325 0.52238 0.56-1.3104 0.684-1.3978-1.911-0.0892-0.109-1.0287-0.791-0.57943-0.07h-5.2684l-1.9059 0.495-1.1072-0.61 2.0806-1.905 1.2284-2.427 9e-3 -0.151-0.61153-1.593 1.0109 0.138","name":"Jones","state":"NC"},
  {"id":"c37061","d":"m854.36 346.24 6.0921-0.892 2.6529 3.496 1.1072 0.61 0.72384 1.004 0.19255 4.315 0.016 0.144 0.14441 0.267-7.9783 1.503-0.23178 0.296-0.1141 0.06-1.3354-0.401 0.27278-3.947-0.99484-3.976-0.54734-2.483","name":"Duplin","state":"NC"},
  {"id":"c37133","d":"m864.21 349.46 1.9059-0.495h5.2684l0.57943 0.07 1.0287 0.791 0.0892 0.109 1.3978 1.911 1.6474 3.11-6.5877 6.001-4.2521-5.768-0.14441-0.267-0.016-0.144-0.19255-4.315-0.72384-1.004","name":"Onslow","state":"NC"},
  {"id":"c37031","d":"m882.98 344.57 0.0784 0.153 0.32983 0.352 0.75416-0.08 1.381-0.78493 0.37134-1.753 0.80616 1.0226 0.94691 0.93558 1.2344-0.21113-0.98658-1.2967 1.6063 0.48683 0.57786 1.5134-1.1683 1.7827-0.45725 0.0415-0.4556 0.62608 0.35514 0.84762 3.2471-4.9628 1.6285-2.4252 0.33411 0.44634-1.5783 2.1001-0.92531 2.218-1.7939 2.5861-1.8449 3.9369-0.56594 1.2438-0.37363-0.66581-0.63113-0.216-1.9326-0.376-0.95027 0.112-0.7916 0.161-0.85399 0.248-1.5903 0.581-1.4869 0.617-0.16224 0.07-0.066 0.03-0.48138 0.235-0.40828 0.234-0.69888 0.401-0.29774 0.168-1.6474-3.11 1.3104-0.684 2.4354-0.683 3.4784-1.549 1.0858-0.756 0.34588-1.1 0.0874-0.523-0.13015-0.119-1.1642-0.749 1.0483-1.109","name":"Carteret","state":"NC"},
  {"id":"c37137","d":"m882.16 337.19 2.0342-0.02 0.36906 0.113 0.27278 0.392 0.17115 0.394 0.0713 0.355-0.26565 1.196-0.52416 2.232-0.28705 0.678-1.018 2.032-1.0483 1.109-0.80229 0.829-0.3227 0.152-0.71493 0.1-1.6545-0.408-1.0376-0.58-0.43323-0.458-0.84509-2.548 0.20325-1.094 0.24069-0.571 0.73276-0.882 1.0822 0.666 3.81-1.237 0.15868-0.868v-0.209l-0.19255-1.373","name":"Pamlico","state":"NC"},
  {"id":"c37049","d":"m871.15 337.56 6.1491 2.66-0.73276 0.882-0.24069 0.571-0.20325 1.094 0.84509 2.548 0.43323 0.458 1.0376 0.58 1.6545 0.408 0.71493-0.1 0.3227-0.152 0.80229-0.829 1.1642 0.749 0.13015 0.119-0.0874 0.523-0.34588 1.1-1.0858 0.756-3.4784 1.549-2.4354 0.683-0.52238-0.56-0.69889-4.325-0.33696-1.043-0.11411-0.137-0.20859-0.04-0.69889 0.426-0.57051-0.305-5.625-2.241-0.19433-0.02 1.0234-2.837 3.3019-2.515","name":"Craven","state":"NC"},
  {"id":"c37147","d":"m866.41 329.05 3.6068 1.319 1.1268 7.191-3.3019 2.515-1.9433-1.654-5.1044-4.324 0.60083-0.708 1.9701-2.144 0.53129-0.685 0.3851-0.658 1.3496-1.02 0.77911 0.168","name":"Pitt","state":"NC"},
  {"id":"c37117","d":"m865.68 323.17 0.025 0.127 0.16759 0.258 2.1599 1.108 0.58755 1.108 0.21929 0.129 2.4071-0.76307 0.53998 1.8411 0.21038 0.06 1.3872-1.4126 1.0679 1.732 0.77306-0.84752-0.0377-0.89665 1.7195 0.24269-0.78982 3.93-1.7579 1.223-0.57944 0.367-1.6295-0.506-2.1323-0.496-3.6068-1.319-1.774-4.026 1.043-1.854","name":"Martin","state":"NC"},
  {"id":"c37041","d":"m876.06 315.83 2.2179-1.765-0.0214 2.673 0.90748 2.835 0.0713 0.07 0.21038 0.105 0.40828 0.06 0.74702 0.06 1.6367-0.1-1.118 1.1382-0.84003 1.0073-1.7682-0.5451-0.65778 0.59257-1.8775-2.0727 0.14813-2.8443-0.0642-1.219","name":"Chowan","state":"NC"},
  {"id":"c37091","d":"m870.96 311.01 0.34588 0.515-0.025 0.225-0.312 0.907-0.29774 0.138 0.31022 1.246 0.0678 0.08 0.28169 0.191 0.51347 0.151 1.6402 0.273h0.49742l2.0717 1.087 0.0642 1.22-3.4784 0.731-1.9522 0.483-3.1575 0.562h-0.48316l0.35479-2.931-0.19956-2.1869 0.93054-0.41808-0.52463-0.77564-0.77029 0.0596-0.36137-0.716 4.4518-0.836h0.0321","name":"Hertford","state":"NC"},
  {"id":"c37015","d":"m876.12 317.05-0.14813 2.8443 1.8775 2.0727-0.0731 1.803-0.86647 2.078-1.7195-0.24269 0.0377 0.89665-0.77306 0.84752-1.0679-1.732-1.3872 1.4126-0.21038-0.06-0.53998-1.8411-2.4071 0.76307-0.21929-0.129-0.58755-1.108-2.1599-1.108-0.16759-0.258-0.025-0.127 1.3134-1.0312-1.0942-1.2278-0.35228-0.96388 1.4987-1.1181h0.48316l3.1575-0.562 1.9522-0.483 3.4784-0.731","name":"Bertie","state":"NC"},
  {"id":"c37073","d":"m877.66 309.49 1.084 0.715 1.3086 2.859-1.7757 1.002-2.2179 1.765-2.0717-1.087h-0.49742l-1.6402-0.273-0.51347-0.151-0.28169-0.191-0.0678-0.08-0.31022-1.246 0.29774-0.138 0.312-0.907 0.025-0.225-0.34588-0.515-0.15722-0.17913 6.8519-1.3469","name":"Gates","state":"NC"},
  {"id":"c37029","d":"m878.56 309.29 3.1949-0.675 3.375 2.234 2.1858 1.196 0.0891-0.08 0.24782 0.02 0.41006 0.16 1.3585 1.029 1.8524 2.596 0.0125 0.06-2.9578 0.08-0.55626-0.626-1.3978-0.98-2.7224-1.657-3.6727-1.686-1.2373-0.763-1.084-0.715 0.90213-0.193","name":"Camden","state":"NC"},
  {"id":"c37139","d":"m878.74 310.2 1.2373 0.763 3.6727 1.686 2.7224 1.657 1.3978 0.98 0.55626 0.626-2.25 2.017-1.815-1.181-2.2357-1.285-1.79-2.088-0.1872-0.316-1.3086-2.859","name":"Pasquotank","state":"NC"},
  {"id":"c37143","d":"m880.05 313.06 0.1872 0.316 1.79 2.088 2.2357 1.285 1.815 1.181-3.8439 1.841-1.6367 0.1-0.74702-0.06-0.40828-0.06-0.21038-0.105-0.0713-0.07-0.90748-2.835 0.0214-2.673 1.7757-1.002","name":"Perquimans","state":"NC"},
  {"id":"c37013","d":"m879.88 329.01 0.88919 1.5418 2.4073 0.90922-1.5048 1.48-0.20859 0.122-0.0571 0.1v0.1l0.0731 0.273 0.58657 1.087 0.63648 0.842 0.31201 0.362-0.86113 1.374 0.19255 1.373v0.209l-0.15868 0.868-3.81 1.237-1.0822-0.666-6.1491-2.66-1.1268-7.191 2.1323 0.496 1.6295 0.506 0.57944-0.367 1.7579-1.223 3.7619-0.765","name":"Beaufort","state":"NC"},
  {"id":"c37187","d":"m877.78 323.77 0.0161 0.01 0.37083 0.151h0.11946l1.0608-0.289 1.7597-0.684 0.55625-0.375 0.19077-0.267 1.0626-0.547 0.1765 0.07 0.18364 0.159 0.54734 0.578 0.29774 2.428-0.37084 1.221 0.57944 2.033-4.4447 0.745-3.7619 0.765 0.78982-3.93 0.86647-2.078","name":"Washington","state":"NC"},
  {"id":"c37177","d":"m891.14 327.5-1.9132 0.0235-0.76141-0.5184-0.50976 0.65596-0.0484 2.1239-1.7261 0.0268-0.15171-1.738-1.7035 0.19125-0.57944-2.033 0.37084-1.221-0.29774-2.428 1.4263-1.022 0.98236-0.569 0.65074-0.256 2.0753-0.433 0.78802 0.353 0.22465 0.201 0.44928 1.212-0.041 0.298-7e-3 0.651 0.18542 1.262 0.32983 1.293 0.30309 1.519-0.0464 0.408","name":"Tyrrell","state":"NC"},
  {"id":"c37053", "transform":"translate(0 -.10698)","d":"m889.56 307.07 0.95867 2.3262 0.42383 0.33789-8e-3 0.26758 0.74219 1.2891 0.29101 0.68945-0.54687-0.1875 0.32031 0.8086 0.66406 0.10156 0.72266 1.1719 0.14843-0.10351-3.5117-6.7441zm-0.463 0.0996-0.906 0.19352 0.0139 0.16804-0.33892-0.0988-0.58 0.12395 0.0882 0.16602 0.6875 0.0879-0.0625 0.70117 0.25391 0.0957 0.27734-0.18946 0.86133 0.0508zm-2.231 0.47656-1.6852 0.36133v-0.01l-3.4219 0.72266 3.375 2.2324 2.1855 1.1973 0.0899-0.0801 0.24804 0.0195 0.41016 0.16015 1.3574 1.0293 1.8535 2.5957 0.0117 0.0606 0.51953 0.67383 0.48633 0.49023 0.2539 0.16797 0.75586 0.3125h0.11328l-0.0156-0.24805-0.30469-0.65624-0.84766-1.9902-2.373-3.127-0.31641-1.6309-0.39258-0.0742 0.0488 0.92773 0.043 0.79297-1.1113-1.4141 0.58985-0.0391-0.23633-0.30664-0.55664 0.0586-0.91993-1.5273z","name":"Currituck","state":"NC"},
  {"id":"c37055","d":"m891.14 327.5 0.0464-0.408-0.30309-1.519-0.32983-1.293-0.18542-1.262 7e-3 -0.651 0.041-0.298 0.7702-1.463 0.13728-0.152 0.64362-0.424 0.353-0.113 0.34588-0.07h0.19968l0.81121 0.224 0.64361 0.596 1.3015 1.834 0.21216 0.344 0.86291 2.748 0.0196 0.105 0.0321 1.606-0.59548 1.23-0.36905 0.202-0.71671 0.232-0.63292-0.145-1.3538-1.8838-1.941 0.54879m5.1097-7.255 0.32983 0.152 0.32805 0.258 0.42789 0.443 0.32805 0.561 0.2496 0.908-0.0802 0.171-0.0731 0.01-0.86113-0.153-0.15867-0.12-1.3496-1.968-0.0981-0.169-9e-3 -0.05 0.13728-0.122 0.23356-0.05h0.27456l0.32092 0.119m2.1537 16.811 0.33696-0.185 0.26565-0.177 1.4548-1.005 1.5582-1.156 0.0428-0.369-0.0838-2.332-0.11054-1.558-0.19433-2.307-0.23356-1.045-0.16759-0.522-0.24068-0.544-0.28883-0.364-0.22821-0.288-0.93065-2.003 0.0678-0.08 0.10162 0.02h0.0339l0.0374 0.05 0.47603 0.58 0.18364 0.297 0.55447 1.059 0.32805 0.764 0.45106 1.012 0.14441 0.99 0.0339 0.296 0.16759 1.406 0.15867 2.058 0.0767 1.679-0.0107 2.042-0.0963 0.21h-0.21573l-0.29774-0.03-0.36192 0.105-0.52952 0.2-0.4261 0.266-1.9059 1.237-0.15154-0.305m-5.1329-23.396 1.0055 1.5014h5e-3l0.55626 0.8762 0.63801 0.731 0.89704 1.141 0.88302 1.2442 1.2279 2.1538 0.88252 1.364-0.0856 0.266-1.8168-2.024-0.73122-1.6228-0.99325-0.3009-0.6047-1.2805-0.89716-1.7905-1.117-2.1634 0.15001-0.10259","name":"Dare","state":"NC"},
  {"id":"c37095","d":"m891.14 327.5 1.941-0.54879 1.3538 1.8838-0.42611 0.321-0.79694 1.173-0.0553 0.114-0.49742 1.318 0.0713 0.264-9e-3 0.241-0.10162 0.739-0.025 0.154-0.0892 0.167-0.68284 1.086-1.141 1.246-0.11232 0.07-4.6604 0.451h-0.16937l-1.5119-0.188-1.2124-0.183-0.31201-0.362-0.63648-0.842-0.58657-1.087-0.0731-0.273v-0.1l0.0571-0.1 0.20859-0.121 1.5048-1.48-2.4073-0.90922-0.88919-1.5418 4.4447-0.745 1.7035-0.19125 0.15171 1.738 1.7261-0.0268 0.0484-2.1239 0.50976-0.65596 0.76141 0.5184 1.9132-0.0235m7.2634 9.556 0.15154 0.305-0.34409 0.193-0.33162 0.265-0.82547 0.667-1.166 1.004-0.51347 0.451-0.57943 0.683-0.27278 0.401-0.18542 0.169-0.0553-0.07 0.0178-0.09 0.28704-0.818 0.32983-0.473 1.166-1.021 1.7668-1.416 0.55448-0.248","name":"Hyde","state":"NC"}
  ]`
};
let memoize = (fn) => {
  //1
  let cache = {}; // 2
  return (...args) => {
    //3
    let argsAsStr = JSON.stringify(args); //4
    if (cache[argsAsStr]) {
      console.log("fast");
      return cache[argsAsStr];
    } else {
      console.log("slow");
      cache[argsAsStr] = fn(...args);
      return cache[argsAsStr];
    }
    // let result = cache[argsAsStr] = cache[argsAsStr] ||  fn(...args)
    // return result;//6
  };
};
//-----------///////////////---------------------
// Usage:
// const ncCountyArr = partsByRegion['NC']()
// Why do this? Lazy load parsing of json helps load time a lot
// The timeout code chaches the arrays so parsing is only done once.
export const partsByRegion = (key) => {
  console.log("slow");
  JSON.parse(partsByRegionHash[key]);
};
const regionData = { propsByRegion, regionAbbreviations, partsByRegion };
export default regionData;
