import { Level } from "../../helpers/imc"
import upImage from '../../assets/up.png'
import downImage from '../../assets/down.png'

type Props = {
    item: Level
}

export const GridItem = ({item}: Props) => {
    return (
        <div
            className="flex-1 flex flex-col text-white rounded-lg justify-center items-center p-5"
            style={{backgroundColor: item.color}}
        >
            <div className="w-[70px] h-[70px] rounded-[50%] bg-black/10 flex justify-center items-center">
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width="30"/>
            </div>
            <div className="text-[20px] font-bold mt-1">{item.title}</div>

            {item.yourImc &&
                <div className='text-[17px] mt-2 mr-0 mb-10 ml-0'>
                    Seu IMC é de {item.yourImc} kg/m²
                </div>
            }

            <div className="text-[12px] mt-[14px]">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>
        </div>
    )
}