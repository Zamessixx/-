import * as React from 'react';
import { Container } from './container';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>

               
            </Container>
        </header>
    );
}
