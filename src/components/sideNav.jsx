import React from 'react';
import SelectBtn from './inputs/selectBtn'
import Section from './section'
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../assets/css/priceSlider.css'
import '../assets/css/selectMenu.css'
import Tags from './tags';
import Cta from './callToAction/cta';

const SideNav = () => {
    const [value, setValue] = React.useState([20, 67]);
    const [age, setAge] = React.useState('');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function valueLabelFormat(value) {
        return `${value} $`;
      }

    return (
        <div>
            <div className="w-full ">
                <div className="flex flex-col gap-y-6">
                    <div className="title">
                        <div className="flex flex-col">
                            <div className="text-3xl font-bold text-primary-black">Search real estate</div>
                            <div className="text-gray-300">23 property found</div>
                        </div>
                    </div>
                    <div className="apartment-type">
                        <div className="flex items-center text-center justify-between rounded-xl bg-gray-100 text-gray-400" style={{height:"2.7rem"}}>
                            <div className="flex items-center justify-center rounded-xl w-full text-xs h-full cursor-pointer">Purchase</div>
                            <div className="flex items-center justify-center rounded-xl w-full text-xs bg-primary-blue text-white h-full cursor-pointer">Rent</div>
                            <div className="flex items-center justify-center rounded-xl w-full text-xs h-full cursor-pointer">Daily</div>
                        </div>
                    </div>
                    <div className="property-type">
                        <Section lable={'Property type'}>
                            <div className="flex flex-wrap gap-3">
                                <SelectBtn lable={'House'} active={false}/>
                                <SelectBtn lable={'Commercial'} active={false}/>
                                <SelectBtn lable={'Apartment'} active={true}/>
                                <SelectBtn lable={'Land Plot'} active={false}/>
                            </div>
                        </Section>
                    </div>
                    <div className="rooms">
                        <Section lable={'Rooms'}>
                            <div className="flex rounded-lg bg-gray-100 px-4" style={{height:"2.7rem"}}>
                            <Select
                                value={age}
                                onChange={handleAgeChange}
                                displayEmpty
                            >
                                <MenuItem value="">1 room, studio</MenuItem>
                                <MenuItem value={10}>2 room, 2 studio</MenuItem>
                                <MenuItem value={20}>3 room, 3 studio</MenuItem>
                                <MenuItem value={30}>4 room, 4 studio</MenuItem>
                            </Select>
                            </div>
                        </Section>
                    </div>
                    <div className="price">
                        <Section lable={'Price, $'}>
                            <div className="flex flex-col">
                                <div className="pricing-inputs flex items-center gap-x-2">
                                    <div className="flex justify-start items-center text-sm pl-5 w-full bg-gray-100 rounded-lg" style={{height:"2.7rem"}}>$50</div>
                                    <div className="text-xl font-semibold text-gray-900">-</div>
                                    <div className="flex justify-start items-center text-sm pl-5 w-full bg-gray-100 rounded-lg" style={{height:"2.7rem"}}>$950</div>
                                </div>
                            </div>
                        <Slider
                            value={value}
                            min={0}
                            step={1}
                            max={100}
                            onChange={handleChange}
                            getAriaValueText={valueLabelFormat}
                            valueLabelFormat={valueLabelFormat}
                            valueLabelDisplay="auto"
                            aria-labelledby="non-linear-slider"
                            />
                        </Section>
                    </div>
                    <div className="tags">
                        <Section lable={''}>
                            <div className="flex flex-wrap gap-3">
                                <Tags tag={'Area from 25m'} />
                                <Tags tag={'Floor From 2'} />
                                <Tags tag={'Underground parking'} />
                            </div>
                        </Section>
                    </div>
                    <div className="cta">
                        <Section lable={''}>
                            <Cta />
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SideNav