interface HomeProps {
    poolsCount: number;
    guessesCount: number;
    usersCount: number;
}

import Image from 'next/image';
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import iconCheckImg from '../assets/icon-check.svg';
import { copaApi } from '../lib/axios';
import { FormEvent, useState } from 'react';

export default function Home(props: HomeProps) {
    const [poolTitle, setPoolTitle] = useState('');

    async function createPool(e: FormEvent) {
        e.preventDefault();

        try {
            const response = await copaApi.post('/pools', {
                title: poolTitle
            });

            const { code } = response.data;
            navigator.clipboard.writeText(code);

            setPoolTitle('');
            alert('Bolão criado com sucesso! O código foi copiado para a área de transferência.');
        } catch (error) {
            console.error(error);
            alert('Falha ao criar o bolão, tente novamente!');
        }
    }

    return (
        <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 items-center gap-28">
            <main>
                <Image src={logoImg} quality={90} alt="Logo da NLW Copa" />
                <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu próprio bolão da copa e compartilhe entre amigos!</h1>
                <div className="mt-10 flex items-center gap-2">
                    <Image src={usersAvatarExampleImg} quality={90} alt="Exemplo de usuários do NLW Copa" />
                    <b className="text-gray-100 text-xl">
                        <span className="text-[#129e57]">+{props.usersCount}</span> pessoas já estão usando
                    </b>
                </div>
                <form onSubmit={createPool} className="mt-10 flex gap-2">
                    <input className="flex-1 px-6 py-4 rounded bg-[#202024] border border-[#323238] text-sm text-gray-100" type="text" placeholder="Qual nome do seu bolão?" required onChange={e => setPoolTitle(e.target.value)} value={poolTitle} />
                    <button type="submit" className="bg-[#f7dd43] px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-[#e5cd3d]">
                        Criar meu Bolão
                    </button>
                </form>
                <p className="text-[#8d8d99] text-sm mt-4 leading-relaxed">Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀.</p>
                <div className="mt-10 pt-10 border-t border-gray-800 flex justify-between text-gray-100 items-center">
                    <div className="flex items-center gap-6">
                        <Image src={iconCheckImg} quality={90} alt="Ícone de Checkbox" />
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl">+{props.poolsCount}</span>
                            <span>Bolões criados</span>
                        </div>
                    </div>
                    <div className="w-px h-14 bg-gray-800" />
                    <div className="flex items-center gap-6">
                        <Image src={iconCheckImg} quality={90} alt="Ícone de Checkbox" />
                        <div className="flex flex-col">
                            <span className="font-bold text-2xl">+{props.guessesCount}</span>
                            <span>Palpites enviados</span>
                        </div>
                    </div>
                </div>
            </main>
            <Image src={appPreviewImg} quality={90} alt="Dois celulares exibindo uma prévia da aplicação móvel do NLW Copa" />
        </div>
    );
}

export const getServerSideProps = async () => {
    const [poolsCount, guessesCount, usersCount] = await Promise.all([copaApi.get('pools/count'), copaApi.get('guesses/count'), copaApi.get('users/count')]);

    return {
        props: {
            poolsCount: poolsCount.data.count,
            guessesCount: guessesCount.data.count,
            usersCount: usersCount.data.count
        }
    };
};
