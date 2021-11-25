import React from 'react';
import PropertyTypeWraper from './inputs/selectBtn'
import Section from './section'
import Slider from '@mui/material/Slider';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import '../assets/css/priceSlider.css'
import '../assets/css/selectMenu.css'
import Tags from './tags';
import Cta from './callToAction/cta';
import ServiceTypeWraper from './sideNav/serviceType';

const SideNav = () => {
    const [value, setValue] = React.useState([250, 750]);
    const [age, setAge] = React.useState('');

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
      };

    function valueLabelFormat(value) {
        return `${value} $`;
      }

    return (
        <div>
            <div className="w-full">
                <div className="flex flex-col gap-y-6">
                    <div className="title">
                        <div className="flex flex-col">
                            <div className="text-3xl font-bold text-primary-black">Search real estate</div>
                            <div className="text-gray-300">23 property found</div>
                        </div>
                    </div>
                    <div className="apartment-type">
                        <ServiceTypeWraper />
                    </div>
                    <div className="property-type">
                        <Section lable={'Property type'}>
                            <PropertyTypeWraper />
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
                                    <div className="flex justify-start items-center text-sm pl-5 w-full bg-gray-100 rounded-lg" style={{height:"2.7rem"}}>${value[0]}</div>
                                    <div className="text-xl font-semibold text-gray-900">-</div>
                                    <div className="flex justify-start items-center text-sm pl-5 w-full bg-gray-100 rounded-lg" style={{height:"2.7rem"}}>${value[1]}</div>
                                </div>
                            </div>
                        <Slider
                            value={value}
                            min={50}
                            step={50}
                            max={1000}
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