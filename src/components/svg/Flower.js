import React from 'react';
import PropTypes from 'prop-types';

const Flower = props => {
  return (
    <svg
      viewBox="0 0 328 304"
      xmlns="http://www.w3.org/2000/svg"
      className={`${props.className} SVG`}
      preserveAspectRatio="xMidYMin slice"
    >
      <g id="Page-1" fill="none" fillRule="evenodd">
        <g
          id="metal-home-add-hover"
          transform="translate(-91 -180)"
          fill="#A2423D"
        >
          <path
            d="M179.868148,409.5208 C179.771182,409.82562 179.620729,410.109841 179.416774,410.35249 C177.666669,421.997412 184.019148,433.588744 184.681288,445.294166 C185.109837,452.900841 184.203252,460.275279 182.286374,467.503141 C193.679244,458.123354 195.189423,440.821965 199.69475,427.531186 C202.059386,420.556498 205.033229,414.098578 209.229884,408.402454 C205.203948,410.189724 200.797271,411.384026 195.947201,411.825564 C189.577297,412.406211 184.28386,411.511892 179.868148,409.5208 Z M174.207611,406.0295 C167.788348,400.841872 163.815036,392.788014 161.19332,383.950413 C153.447923,387.451621 146.713487,390.230995 144.03711,399.358266 C142.456213,404.741142 141.386029,410.124017 139.243093,415.343382 C136.676473,421.597639 133.280515,426.995069 128.550543,431.318249 C134.781913,430.389079 141.282874,428.839553 146.289348,425.196477 C150.232769,422.326524 152.749244,418.349004 155.901921,414.714241 C161.260485,408.532363 166.721821,406.303377 174.207611,406.0295 Z M174.114995,411.211207 C160.718935,412.240627 159.546133,422.258453 149.295208,429.552565 C145.089822,432.546451 140.112787,434.241297 134.996182,435.337745 C148.677259,438.486216 162.864743,437.118772 176.090637,431.245868 C176.431183,431.094672 176.766694,431.01802 177.089408,431.002838 C175.407581,424.114277 173.510152,418.085904 174.114995,411.211207 Z M221.554674,400.262162 C222.179728,401.152331 222.237517,402.34414 221.136453,403.258628 C201.329752,419.699162 205.2997,452.104865 188.283703,469.091689 C202.89782,464.254824 215.399703,455.359134 224.879461,442.71254 C218.320454,429.962863 221.237478,410.939198 225.145277,396.729269 C223.991427,397.961229 222.795731,399.141846 221.554674,400.262162 Z M179.940152,474.976257 C179.862133,474.98737 179.784801,474.994488 179.708272,474.997808 C179.763218,475.052274 179.818164,475.10674 179.873111,475.161206 C179.895525,475.099565 179.917872,475.037916 179.940152,474.976257 Z M177.000546,472.313732 C176.997886,472.188377 177.004916,472.063093 177.022291,471.938993 C176.909365,471.95927 176.796342,471.979332 176.683219,471.999177 C176.788995,472.104028 176.894771,472.20888 177.000546,472.313732 Z M255.778644,449.681864 C258.932543,455.786783 260.375909,462.519031 259.916453,469.493199 C259.696252,472.827774 254.80289,472.843417 255.023092,469.493199 C255.434134,463.230767 254.247494,457.375054 251.33839,451.905203 C251.33773,451.90396 251.33707,451.902717 251.336412,451.901474 C244.36458,454.749398 236.628069,455.220124 230.555453,449.996406 C229.569053,449.147671 228.672666,448.22992 227.86027,447.251023 C226.883262,448.483927 225.879818,449.683067 224.850452,450.847917 C235.733449,461.745398 251.875268,465.539361 259.233896,480.137476 C258.064863,479.826117 256.89583,479.517354 255.726797,479.205995 C270.552536,471.802403 283.213533,456.115564 273.457764,439.365135 C272.019853,439.785939 270.594258,440.320999 269.183465,440.996398 C264.373945,443.300744 260.347952,446.954104 255.778644,449.681864 Z M336.802552,422.972036 C333.843383,427.657148 329.080831,431.173656 323.588686,433.664261 C331.110756,438.966357 337.996583,444.908687 344.302011,451.617823 C343.251383,451.481774 342.200754,451.348292 341.150126,451.214809 C351.989283,443.937454 360.051036,432.432302 355.42463,419.130273 C355.377005,418.993496 355.341014,418.860146 355.315822,418.73044 C350.604122,419.296661 345.673662,418.954659 341.141301,417.856822 C341.142405,417.861614 341.1435,417.866415 341.144585,417.871227 C342.527548,424.005923 343.15067,430.195394 342.969255,436.481371 C342.871974,439.838239 337.613558,439.840847 337.710839,436.481371 C337.84253,431.921094 337.550691,427.435903 336.802552,422.972036 Z M297.004571,361.152243 C305.502801,368.4666 313.997613,375.787003 322.383568,383.223064 C329.555024,389.58536 337.692117,396.957625 339.533262,406.847124 C339.879479,408.705188 340.02694,410.470833 339.995985,412.146761 C347.563568,414.514543 356.998121,414.577358 363.90458,410.235558 C366.910013,408.34504 369.33375,405.66919 372.494812,403.861886 C373.932512,403.039633 375.33446,402.295607 376.725677,401.685063 C362.988158,396.722435 349.565252,390.988477 336.54203,384.320118 C323.204858,377.49153 310.594218,367.898521 297.004571,361.152243 Z M302.144893,358.219209 C311.971004,363.607233 321.234674,370.215949 331.02817,375.57458 C348.044743,384.885224 365.817122,392.550073 384.146096,398.842791 C382.03174,393.10656 379.937654,387.202245 376.745606,382.08588 C372.803055,375.76997 366.856251,371.099038 360.992482,366.650528 C359.159892,368.21038 357.089186,369.482265 354.864106,370.375237 C343.411318,374.970054 331.143037,368.784526 320.613447,364.616297 C314.52994,362.206532 308.373946,360.08142 302.144893,358.219209 Z M367.160688,358.431044 C366.458773,360.010091 365.572109,361.507889 364.531715,362.89075 C368.902521,366.214876 373.252468,369.650694 376.902322,373.744104 C391.652409,370.242048 403.1009,361.229347 414.559318,351.698479 C414.940099,353.132832 415.320879,354.56976 415.70166,356.004113 C406.632866,353.503652 401.731936,347.258937 395.96324,340.254556 C386.95876,329.320672 374.76492,324.528519 361.078427,328.832316 C365.535517,336.094461 369.793774,343.570791 368.873641,352.12703 C368.819341,352.632897 368.745908,353.135458 368.654115,353.633869 C377.984762,356.166042 387.34571,354.731911 396.785133,353.047613 C400.016227,352.471688 401.390724,357.299442 398.149372,357.877871 C387.79692,359.722816 377.402205,361.283466 367.160688,358.431044 Z M348.125666,291.664425 C348.602338,296.713355 349.393663,301.532113 350.648557,306.254884 C350.861856,306.11829 351.108875,306.006547 351.391477,305.926511 C376.13574,298.925747 379.072245,274.244256 384.91421,253.110746 C385.974974,254.16562 387.035738,255.220495 388.096502,256.275369 C381.139442,257.947731 374.867997,258.434003 367.716895,257.844817 C361.062541,257.294224 354.690194,254.718786 348.095346,258.091812 C344.151848,260.109813 341.28864,264.081074 338.819787,267.714947 C341.908199,269.804335 344.395936,272.749343 345.91934,276.484729 C346.936707,278.97993 347.349107,281.649297 347.587246,284.340835 C353.561032,277.294041 360.722996,271.547561 369.047643,267.308724 C372.038324,265.788659 374.6767,270.296619 371.680799,271.819296 C362.706146,276.389939 355.002402,282.765333 349.005382,290.877571 C348.748511,291.225205 348.448648,291.4837 348.125666,291.664425 Z M284.949825,282.610232 C283.515607,286.952742 281.891933,291.221104 280.096037,295.418937 C286.675682,288.336208 293.619913,281.581237 301.041642,275.454236 C308.229496,269.518927 316.609594,263.961032 326.237621,264.000206 C330.187309,248.458291 329.632513,232.91747 324.707422,218.265542 C323.781466,224.796631 320.791125,231.29026 317.66541,237.56437 C309.400363,254.156545 298.400194,268.964753 285.412262,282.225146 C285.262979,282.377584 285.108189,282.505307 284.949825,282.610232 Z M288.072962,271.829736 C295.101663,263.952959 301.436785,255.538403 306.885816,246.461102 C313.671123,235.157755 324.276379,218.646281 317.645821,205.529979 C305.641795,215.198643 289.499367,220.120083 281.751357,233.916652 C283.218115,235.135882 284.563912,236.467331 285.749644,237.904037 C293.633976,247.458002 291.009293,259.703299 288.320343,270.822472 C288.239035,271.158662 288.156572,271.494416 288.072962,271.829736 Z M259.365332,187.811105 C260.787994,196.670141 269.938875,201.951506 275.384341,208.700223 C278.891869,213.046349 281.561361,217.824556 283.683815,222.934281 C288.545536,218.124225 294.468618,214.553468 300.440887,210.951056 C300.19564,210.693108 299.993842,210.367751 299.856553,209.969435 C293.797775,192.376112 273.383245,195.371276 259.365332,187.811105 Z M279.866163,227.301682 C279.857996,227.280903 279.850004,227.259918 279.842193,227.238725 C276.102766,217.077476 269.85402,210.349186 262.39584,202.841859 C258.945913,199.368235 256.164707,195.692438 254.840209,191.373877 C250.116067,202.148033 247.326939,213.711846 254.779618,224.271206 C255.013445,224.602345 255.151998,224.931193 255.211597,225.248514 C257.210105,224.948963 259.304117,224.903493 261.533667,225.204159 C266.93106,225.932985 272.597723,227.889807 277.50885,230.892199 C278.234566,229.623739 279.023092,228.430359 279.866163,227.301682 Z M95.6468929,334.234657 C95.5815331,334.228911 95.5162405,334.223209 95.4510156,334.217549 C94.3138645,334.118509 93.571152,333.419404 93.2254861,332.56339 C92.8823069,332.335525 92.5402677,332.112594 92.1993814,331.894981 C91.249857,331.288576 90.9227728,330.367832 91.0149354,329.487897 C90.9182506,328.636064 91.2833706,327.776035 92.3329946,327.282979 C102.438697,322.535468 111.249128,317.600115 118.95858,309.404546 C123.308707,304.782068 127.746519,301.290242 133.242638,298.844788 C124.515901,288.777799 119.565757,275.575358 115.12753,262.549311 C114.467418,260.614573 116.496745,258.900281 118.299158,259.359327 C129.405416,262.182378 138.718885,257.437434 148.592607,254.02424 C142.620662,238.896834 145.174661,223.434154 148.490298,207.818476 C148.923554,205.775978 151.425094,205.537344 152.799652,206.686891 C163.200384,215.370076 178.771825,210.676948 190.268593,217.936029 C198.675831,223.242419 204.339111,231.789608 208.702621,240.475359 C208.73925,240.548312 208.772248,240.621051 208.801748,240.693495 C215.15102,239.445766 221.74134,238.926608 228.04518,237.111102 C236.153754,234.777389 242.648673,229.287196 250.110312,226.574076 C240.044568,211.974812 246.747817,195.599179 253.96446,181.240123 C254.748564,179.68469 256.870562,179.687257 258.029898,180.721645 C273.072994,194.131479 296.78618,185.83137 304.750893,208.324666 C309.274138,205.512401 313.684429,202.504083 317.534208,198.737726 C318.729955,197.567908 320.740984,197.823564 321.600266,199.261949 C333.539503,219.280564 336.949008,242.095527 331.428229,264.574042 C332.370732,264.78357 333.291788,265.049777 334.185671,265.371636 C338.415054,259.238225 343.184768,253.429321 350.858508,251.754846 C362.687321,249.176836 374.404883,254.273681 386.722683,251.314886 C388.621709,250.856916 390.440532,252.542143 389.904975,254.47951 C386.567449,266.551391 384.890924,282.711554 377.662205,293.242289 C372.161755,301.254189 362.05345,308.262673 352.767883,310.889567 C352.527805,310.957369 352.29808,310.992435 352.079831,310.998898 C352.784058,313.076581 353.589824,315.144223 354.510214,317.213617 C355.577927,319.612043 356.91349,321.983392 358.338919,324.358606 C358.474404,324.285881 358.620935,324.221805 358.778856,324.167656 C368.166261,320.951306 378.115772,321.180494 387.042096,325.756518 C399.107918,331.942004 403.633248,347.328466 417.079722,351.036668 C418.830795,351.520794 419.758138,354.062457 418.222064,355.342302 C406.662419,364.95656 394.973433,374.155748 380.362334,378.178848 C385.143035,385.285656 387.703562,394.011457 390.809649,401.892897 C390.970041,402.300416 391.022983,402.67742 390.991205,403.017955 C391.146745,404.732125 389.215395,406.736965 387.090809,405.791411 C377.365247,401.459082 369.782779,414.700509 361.577793,417.371159 C361.196587,417.495346 360.811594,417.612137 360.42322,417.721631 C360.428405,417.735874 360.433505,417.750212 360.43852,417.764646 C365.839895,433.28967 356.485661,447.115361 343.776697,455.647963 C342.856097,456.266603 341.360771,456.030442 340.624811,455.247516 C334.120797,448.329537 327.031655,442.217585 319.162344,436.847488 C318.698435,436.531339 318.387825,436.141078 318.205304,435.720036 C311.870329,437.732866 305.076445,438.593745 299.19028,438.484291 C292.336829,438.356414 285.440078,437.458496 278.738281,438.291871 C288.340864,456.84413 275.305454,475.203406 258.313539,483.686962 C257.129124,484.278543 255.467866,484.065781 254.806439,482.755481 C247.836261,468.927442 231.832575,464.983324 221.321289,454.605678 C209.625601,466.318216 194.99192,473.988433 178.062912,476.958164 C176.294208,477.269226 174.139087,475.809037 174.873021,473.796135 C179.424568,461.278146 180.627934,448.828308 178.164286,435.863638 C159.261039,444.100177 139.231267,444.043857 120.333128,435.702114 C119.272197,435.233785 118.910697,434.383823 119.018126,433.538223 C118.914718,432.651734 119.245503,431.724286 120.223576,431.128651 C133.186412,423.241208 135.334481,409.747683 139.548493,396.412479 C142.769313,386.217718 149.947506,383.399105 159.073589,379.254239 C159.347022,379.129969 159.61724,379.054414 159.880254,379.020752 C158.962684,375.178914 158.252279,371.264758 157.665458,367.437332 C156.950248,362.774244 156.177475,358.099116 154.869762,353.602538 C133.431242,369.395201 113.140641,346.726495 95.6468929,334.234657 Z M144.333373,335.19151 C132.393549,338.363787 118.04837,336.695333 105.058557,335.222421 C119.322449,347.004213 136.241112,362.057585 152.490223,348.969134 C152.696542,348.802859 152.909992,348.673776 153.12672,348.578059 C152.193911,346.309023 151.064882,344.108725 149.671126,342.004517 C148.109739,339.648899 146.144675,337.46912 144.333373,335.19151 Z M141.177546,330.602559 C140.665998,329.671628 140.224549,328.703225 139.881412,327.6835 C137.547159,320.738154 140.04228,313.660334 145.091158,308.83171 C142.139134,307.077564 139.486593,305.061074 137.086031,302.830427 C128.38794,306.245566 124.060111,312.68419 117.059713,318.704007 C111.866255,323.170615 105.886911,326.448481 99.7568008,329.435716 C112.97899,330.861947 128.391004,333.396267 141.177546,330.602559 Z M126.298618,265.370624 C145.418613,278.307658 166.09172,288.124909 188.217817,294.734017 C183.776279,288.277965 180.75652,281.170042 180.099087,273.676522 C179.733454,269.505889 180.394043,265.400851 181.843832,261.584196 C162.226163,249.900931 145.475683,264.842759 126.298618,265.370624 Z M193.675698,301.609606 C168.270535,294.867414 144.603137,284.073192 122.966128,269.308265 C126.744831,279.540401 131.290633,289.388381 138.565897,297.000956 C139.949857,296.962058 140.85609,298.116801 140.984314,299.353722 C143.548386,301.669515 146.423677,303.727669 149.677833,305.464372 C164.58257,297.063929 183.933156,301.82974 201.295911,308.986139 C198.601393,306.687509 196.034653,304.221114 193.675698,301.609606 Z M117.075563,264.396874 C117.063139,264.345964 117.052299,264.294825 117.043005,264.243525 C117.004462,264.282204 116.965915,264.320883 116.927364,264.359562 C116.976783,264.372126 117.026183,264.384563 117.075563,264.396874 Z M188.391605,251.149072 C189.797009,249.638903 191.341033,248.25796 192.993709,247.034415 C196.331506,244.562484 199.926819,243.007102 203.662984,241.920454 C196.998669,229.10506 188.048865,219.585219 172.912548,217.653774 C166.058037,216.778236 159.870536,216.424146 154.129368,213.573007 C157.554049,222.731654 165.951045,228.054407 173.495602,234.203742 C179.514878,239.106401 184.810316,244.376421 188.391605,251.149072 Z M184.847173,255.68609 C177.705383,240.503256 159.41802,233.844462 151.366655,219.935084 C149.544236,230.891059 149.045685,241.919258 153.482166,252.498129 C155.516431,251.947029 157.588857,251.50845 159.718562,251.254693 C168.479541,250.20981 176.673882,252.436927 184.103554,256.888294 C184.34245,256.482383 184.590444,256.081536 184.847173,255.68609 Z M153.19614,210.443639 C153.284558,210.02327 153.373391,209.603234 153.462431,209.183563 C153.277969,209.232001 153.093508,209.280438 152.909046,209.328876 C152.978091,209.492665 153.033567,209.672706 153.07329,209.8696 C153.112214,210.062517 153.153177,210.253852 153.19614,210.443639 Z M279.219726,352.577194 C278.732423,352.481504 278.244693,352.387183 277.756536,352.294222 C269.994139,360.375596 256.057485,364.934597 245.665694,363.838726 C241.890453,371.66408 237.697246,379.938753 232.583404,387.380688 C232.939347,387.904395 233.064943,388.592059 232.790578,389.398234 C228.276552,402.617556 217.0417,456.158759 247.334343,448.002101 C255.752113,445.736078 261.932183,438.071588 270.064125,435.013482 C276.710276,432.514192 283.480027,432.619291 290.466081,432.934586 C302.926648,433.495965 317.408612,434.731511 327.531051,425.639222 C339.422536,414.95764 333.600395,401.279474 324.103688,391.715524 C310.230007,377.739252 294.121224,365.472759 279.219726,352.577194 Z M225.80118,325.838332 C225.355286,325.878126 224.876306,325.79728 224.387785,325.555982 C206.639749,316.797271 175.220581,298.99789 154.915799,309.010042 C134.307499,319.170864 150.517372,332.228187 156.281626,343.032391 C160.073018,350.140352 161.42084,358.219795 162.627192,366.076233 C164.047035,375.342472 164.988452,385.262346 169.723834,393.600679 C176.882209,406.209429 190.898013,409.341751 204.095864,404.914975 C223.21571,398.499823 232.746344,378.838927 240.896498,361.928429 C240.253808,360.25355 241.625041,357.837924 243.964229,358.39524 C256.675362,361.422335 278.429608,351.20174 278.595394,336.863274 C278.737867,324.364057 272.886135,311.915929 258.903112,311.284965 C247.39393,310.766399 233.75025,316.973859 230.359406,328.642861 C226.354635,342.416779 240.826989,357.210922 237.879104,355.68077 C224.141745,348.554799 219.42242,341.190081 225.80118,325.838332 Z M273.343382,310.765454 C282.385865,318.161675 286.03219,333.43514 282.892881,343.870296 C282.485986,345.221527 281.913334,346.520999 281.198534,347.763532 C299.06362,351.493502 315.238401,357.969067 332.538093,363.878762 C340.023693,366.435721 347.965763,367.951908 355.497523,364.397863 C365.701429,359.584613 364.624364,346.547976 360.485358,338.255206 C356.815645,330.908124 351.843196,324.535 348.724837,316.864123 C345.501336,308.933696 343.767775,300.753997 342.993314,292.26592 C342.323995,284.941967 343.195905,276.74428 335.80006,271.707456 C329.309463,267.287386 320.421114,269.278987 314.107463,272.491247 C298.387625,280.486225 284.738166,297.033127 273.343382,310.765454 Z M228.705122,320.275661 C236.417562,308.93884 252.951163,303.609431 266.083724,307.018933 C266.877011,307.224845 267.646195,307.482434 268.39082,307.787531 C273.543518,298.305329 277.872378,288.464837 281.009277,278.106111 C284.070978,268.007164 289.358905,252.980138 283.26635,243.13431 C277.685364,234.114995 262.61336,227.991055 252.322855,230.868351 C244.140322,233.15934 237.782985,239.758524 229.412792,242.093421 C219.515603,244.851906 208.417899,244.017645 199.183951,249.13169 C186.983417,255.891011 182.322741,269.825491 187.960282,282.527952 C195.525847,299.574768 210.821502,312.137755 227.577313,319.307749 C228.129875,319.544003 228.495242,319.884461 228.705122,320.275661 Z M227.509057,261.716929 C225.483382,259.049822 230.023509,256.46825 232.023046,259.099069 C240.609296,270.394745 246.586998,283.022679 249.916947,296.77033 C250.703693,300.018031 245.661722,301.39176 244.874976,298.149242 C241.641737,284.803342 235.836543,272.670469 227.509057,261.716929 Z M215.32059,292.833564 C212.320184,291.308441 214.96545,286.788102 217.958023,288.307984 C224.718729,291.746062 230.829216,296.187786 236.224202,301.530958 C238.618782,303.905119 234.923765,307.610486 232.529185,305.236326 C227.437112,300.19189 221.702655,296.077726 215.32059,292.833564 Z M258.488213,277.254845 C259.978135,274.388707 264.173249,276.943967 262.685758,279.807578 C260.281953,284.437882 259.467722,289.374008 260.04376,294.590682 C260.401049,297.820774 255.537537,297.785389 255.182678,294.590682 C254.511848,288.524782 255.705244,282.618111 258.488213,277.254845 Z M187.254454,336.939166 C183.979922,337.583564 182.595143,332.910467 185.872279,332.268492 C194.990472,330.480651 204.181549,329.390504 213.492362,329.002896 C216.844984,328.864811 216.826763,333.709908 213.492362,333.847993 C204.642274,334.216221 195.922334,335.240959 187.254454,336.939166 Z M182.192593,366.956752 C178.982624,367.515921 177.618195,362.478174 180.840893,361.919005 C186.644804,360.907798 192.051605,355.802114 196.878015,352.533327 C202.340818,348.836018 207.803622,345.138709 213.266426,341.438787 C216.010555,339.580987 218.558676,344.109211 215.834911,345.951333 C209.644073,350.142488 203.45578,354.333642 197.264942,358.524797 C192.603995,361.681228 187.846315,365.974287 182.192593,366.956752 Z M219.8499,375.119347 C219.117315,378.41747 214.345616,377.013006 215.075726,373.720144 C216.100354,369.10698 217.124982,364.493816 218.152086,359.880653 C218.88467,356.58253 223.656369,357.986994 222.923785,361.279856 C221.899157,365.89302 220.874528,370.506184 219.8499,375.119347 Z M253.334489,400.556051 C253.545087,403.826073 248.405971,403.803206 248.197941,400.556051 C247.640625,391.884266 248.267284,383.344603 249.988028,374.830349 C250.637801,371.621306 255.586865,372.988261 254.942228,376.18206 C253.306238,384.261836 252.805424,392.339071 253.334489,400.556051 Z M280.661962,413.139582 C282.258718,416.04464 277.767516,418.631757 276.17076,415.729263 C268.850127,402.409072 262.847988,388.563253 258.138337,374.143089 C257.108507,370.989319 262.132828,369.65089 263.154856,372.781583 C267.726676,386.783809 273.551975,400.209125 280.661962,413.139582 Z M270.271861,378.905035 C267.377686,377.334141 269.938209,372.754138 272.822274,374.322378 C277.58692,376.912229 282.002748,380.02748 286.145589,383.601793 C288.660614,385.772386 285.063749,389.505911 282.568945,387.353893 C278.764811,384.071469 274.642192,381.279949 270.271861,378.905035 Z M293.340841,339.231815 C291.041588,341.595648 287.439766,337.965293 289.73647,335.606587 C293.628884,331.604479 300.360952,333.355562 305.387699,333.532465 C314.770789,333.858069 324.156429,334.186236 333.539519,334.514404 C336.817611,334.629775 336.822709,339.757396 333.539519,339.642025 C326.761568,339.406154 319.986166,339.16772 313.208215,338.931849 C309.67012,338.808786 296.175395,336.316763 293.340841,339.231815 Z M289.190698,326.829121 C285.996937,327.991447 284.634196,322.885141 287.791126,321.733382 C293.797184,319.546098 299.803243,317.358813 305.809302,315.171529 C309.003063,314.006562 310.365804,319.115509 307.208874,320.264626 C301.202816,322.454552 295.196757,324.641837 289.190698,326.829121 Z M285.368418,316.193568 C283.104053,318.634236 279.452603,314.983532 281.709204,312.553162 C290.456123,303.135478 301.777947,297.564163 314.536026,296.022011 C317.840705,295.622956 317.801887,300.777195 314.536026,301.1711 C303.128803,302.548481 293.139718,307.826298 285.368418,316.193568 Z"
            id="Combined-Shape"
          />
        </g>
      </g>
    </svg>
  );
};

Flower.propTypes = {
  className: PropTypes.string,
};

export default Flower;
