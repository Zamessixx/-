import { Input } from "../ui/input";
import { CheckboxFilterGroup } from "./checkbox-filters-group";
import { FilterCheckbox } from "./filter-checkbox";
import { Title } from "./title";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Фильрация" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="Можно собирать" value="1" />
                <FilterCheckbox text="Новинки" value="2" />
            </div>

        <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mp-3">Цена от и до</p>
            <div className="flex flex-col gap-3 mb-5">
                <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0}/>
                <Input type="number" min={100} max={5000} placeholder="5000"/>
            </div>
            </div>

            <CheckboxFilterGroup
                className="mt-5"
                title="Ингредиенты"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Маццарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моццарелла',
                        value: '2',
                    },
                    {
                        text: 'Томаты',
                        value: '3',
                    },
                ]}
                />
            </div>
    
    );
}