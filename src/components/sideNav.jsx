import React, { useEffect } from 'react';
import { connect } from 'react-redux';
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
    const filterInitState = {
        serviceType: null,
        propertyType: null,
        rooms: null,
        price: null
    }

    const [value, setValue] = React.useState([250, 750]);
    const [rooms, setRooms] = React.useState({rooms:[0,0],floors:0});
    const [filter, setFilter] = React.useState(filterInitState)

    const handleRoomsChange = (event) => {
        setRooms(event.target.value);
        setFilter({...filter, rooms: event.target.value})
    };
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setFilter({...filter, price: newValue})
    };

    function valueLabelFormat(value) {
        return `${value} $`;
    }

    function handleSelectedFilter(selectedFilter){
        if(selectedFilter.serviceType){
            setFilter({...filter, serviceType:selectedFilter.serviceType})
        }
        if(selectedFilter.propertyType){
            setFilter({...filter, propertyType:selectedFilter.propertyType})
        }
    }

    useEffect(() => {
        console.log(filter);
    }, [filter])

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
                        <ServiceTypeWraper selectedFilter={handleSelectedFilter} />
                    </div>
                    <div className="property-type">
                        <Section lable={'Property type'}>
                            <PropertyTypeWraper selectedFilter={handleSelectedFilter}/>
                        </Section>
                    </div>
                    <div className="rooms">
                        <Section lable={'Rooms'}>
                            <div className="flex rounded-lg bg-gray-100 px-4" style={{ height: "2.7rem" }}>
                                <Select
                                    value={rooms}
                                    onChange={handleRoomsChange}
                                    displayEmpty
                                >
                                    <MenuItem value="">no rooms</MenuItem>
                                    <MenuItem value={{rooms:[1,3],floors:0}}>1 - 3 room, 0 floor</MenuItem>
                                    <MenuItem value={{rooms:[4,6],floors:0}}>4 - 6 rooms, 0 floor</MenuItem>
                                    <MenuItem value={{rooms:[7,9],floors:0}}>7 - 9 rooms, 0 floor</MenuItem>
                                    <MenuItem value={{rooms:[10,12],floors:0}}>10 - 12 rooms, 0 floor</MenuItem>
                                    <MenuItem value={{rooms:[4,6],floors:0}}>4 - 6 rooms, 1 floor</MenuItem>
                                    <MenuItem value={{rooms:[7,10],floors:0}}>7 - 10 rooms, 1 floor</MenuItem>
                                    <MenuItem value={{rooms:[11,14],floors:0}}>11 - 14 rooms, 1 floor</MenuItem>
                                    <MenuItem value={{rooms:[7,10],floors:0}}>7 - 10 rooms, 2 floor</MenuItem>
                                    <MenuItem value={{rooms:[11,14],floors:0}}>11 - 14 rooms, 2 floor</MenuItem>
                                    <MenuItem value={{rooms:[15,18],floors:0}}>15 - 18 rooms, 2 floor</MenuItem>
                                </Select>
                            </div>
                        </Section>
                    </div>
                    <div className="price">
                        <Section lable={'Price, $'}>
                            <div className="flex flex-col">
                                <div className="pricing-inputs flex items-center gap-x-2">
                                    <div className="flex justify-start items-center text-sm pl-5 w-full bg-gray-100 rounded-lg" style={{ height: "2.7rem" }}>${value[0]}</div>
                                    <div className="text-xl font-semibold text-gray-900">-</div>
                                    <div className="flex justify-start items-center text-sm pl-5 w-full bg-gray-100 rounded-lg" style={{ height: "2.7rem" }}>${value[1]}</div>
                                </div>
                            </div>
                            <Slider
                                value={value}
                                min={0}
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
                            <Cta filterResult={filter}/>
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        filter: state.filter
    }
};

export default connect(mapStateToProps)(SideNav)