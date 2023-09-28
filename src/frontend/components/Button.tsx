export default function Button(props: { children: React.JSX.Element | string}) {
    return (
        <button className="bg-orange-500 hover:bg-orange-400 text-gray-800 font-semibold py-2 px-4 rounded shadow">
            {props.children}
        </button>
    );
}
