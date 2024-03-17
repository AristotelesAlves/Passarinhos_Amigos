interface Cutuca{
    gif: string;
}

export default function Cutuca(props: Cutuca){
    return (
        <div className="flex fixed top-0 h-full w-full z-30 items-center justify-center  backdrop-blur-sm">
            <div className="rounded-lg drop-shadow-lg z-50 overflow-hidden">
                <img className="w-[200px] h-[200px]" src={props.gif} alt="" />
            </div>
        </div>
    )
}