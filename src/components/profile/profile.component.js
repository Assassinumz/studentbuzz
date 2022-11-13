import UploadButton from "../upload/uploadButton";

const StudentDetail = (props) => {
    return (  
        <div className="px-6">
            <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                    <div className="relative">
                        <img alt="..." src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAh1BMVEX///82NjY0NDQxMTEuLi4pKSkiIiIsLCweHh4kJCQnJyc4ODgbGxv8/PwaGhr5+fnz8/NbW1vY2NicnJzs7Oy6urqTk5OxsbFRUVGFhYXExMR1dXVLS0vi4uKtra3Z2dnKysqgoKBvb29ERERmZmYAAAAQEBCCgoKPj49OTk5zc3NgYGBGRkZlNCR2AAANPklEQVR4nO1diZKquhaVDBCIDCLirDgctYf//74H0ipDooTEJtzXq27dqlPdbbJMssfsncHgD3/4wx/+8Acd4HY9gfcjCbqewbsRDHdR13N4Mxb/8HETRhmCIPD9/9a+jZL0fzsPYkLM9D+TYAusvpbxZNv1zJRhO4qTYLEyKLgBQmRh0yNfu3XXk1ODaO7Z9ECpUQYF0CGjjd/19CQRTJYrgrKFM6oMr4A2jHssaf3JyHMQvFIBLH7XH2Bv1/VEW8EduBuKIaA5ePyusD/CPpoF4cHOVo82oQhPPVzG+MTdlyyYx76dxrMtwi89jYj2S3NsyIt9WWMIEAq7nrUAtp7QFv0hSXpE8QhbMDQA7Y1A3RLQhqFhb7qeeVOcrXYM0b7rmTeF2YZeCvDd9cwbYuq0ZGhYo17s0wgar60YDqD9HWkvbrYH0MBO44BSa6R76CohjYxtLkNqTrum8ByhZ7TjdudoQK3XMDjAlqv3WEWy6JrFM8S47f58rCFads3iCaLT9SjJraFBNQ7dxNiQXsN0m2ocZ/wGraVokeGkax5cbD0ZbneGVtw1ES6mgo49h6HGomaOlTCEx66JcHGEShiCUddEuNi38grra/jVNREuzmrWEH12TYSLnaWEoc6ytK1zX2Zo6xsAX6hhaOqr8UOihCFJuibCxVoNQ1NfuzRQY9OY+l7c8Km8QkztdqSx9/ShhOFB4yjGl7zK19poGwyWSAFDqHNsfy5v1KRG27lrGk+wk3efUqPt0jWNJ1DgAlOKdc5dJPIqnxq2zvHSUD5QQ4HGRttgEClgSIc6X8pw29xQqDL0tL5Z0zK9XWJ46prEUxxaXcIoMQSwaxJPcYTSeQs40zhFujuugHzuaXUcd02Eh9CTyODfGabe00nXy1E7bLTPbz8YUurouogXpIghmndNhYO5vO/0w1BX72KOpFavwFDXNYwtRQy1DXpvsNwRvDPU1n9amIrWUFv/aa2KoaOrd+FTdl2MKEPD0Na7GCnKkOobTrwoUIiZKNVVWQwGEzXZNY3v00SKMqS6CpoU30qi+itt3UNVMW99j6GSNLfG+j6Df5JnaJw0Th8OBntpfaHzna8M8vqC2vrqigyutDQFB603aWp9YyJhf1Mbe0nXFF4hmk7aJxHxZqxrmK2EQ1sDHACNdX0RrbP5movRB1rXrmF9r+yVsR62ZNifQmDaUmWYXU+8MS7tpKmlayC4jqTdlQxTZ5O7DLeVvgBQ2wBUHa22qcaFJHWEbQxwM+l62iKYiW/T3pSq5xC//kWdvqj7HK7w1SGqt2tfRywqazQOA7MRiTLUNhvDhaDC6JWqyBGJuVA6x7l5GImY3+C7J75vAYKWm841Fhz4gru0RzbpDwIxw4307xwKVnl5vXHv7xCs1OuRb3iDYBpK81g+CxOxgFtvwmwPjMVsGq0LZdgQTAfD/lltgoHv3oS7HxAsRQSzricsjJkgw94ZpuKp0r6ZbYFoaQnWt4CbjUg0/9Q7B1G4+UB/8k4/EE5d9M4wXYgyxJq3S6xhI8ywT4ZpptmE19Dp0RqG2YmKbMFbNeb69qfaY/fvKhXHIsl8agyvvsX6n/4uxnpk27nu3nnNVxEM8yqZgDoHfZvTXDFF0AA/9ldzYUPN3cDNTq+7AkjrHFSwH6Yb7n71btI0AeXdpcwo/YLMkbbmzcbMChALflBoNnESwfAhX46ZNQuHsYbxYXe7+8hM0WI9iDsIjdceBsDJ42OWeZNefIhDvbypZH7wMKAGMCo9ASPj1SpCWBQtc5RXoQJs0vNCE5LBZEkIvq1VtYGO//E8XoNoyS8sJFYBMr39pHOfKpoeISkuU8qw3PXQ/3oWdLNmQan4Pi45XQDZ1tcmkzsdreZ6NyJOxdFl9Ffd87UGHlVESj0GCbE3i7vQkX5yoV62NytvAbHKlM+88Ldd6wg1Zu1pYBFr/rsvDAaLJTUtkDN6zXAwZlM057meL/4m59SmhxL82qGMNkfHRLceJo0YDjYnxptdXlw/XzyGV5LEfP9TdG44PnjOMx3HKaafkNofkR1DgLzIBaSH0hgnbzMH/OR8sK0XHbt57QKS8vdCwbWFpyjDDFamKd9wKKPJ0jJRVa4wGbIzENuyBfcvYf7Wa4bp2BARfNyo3K9+GH+c0qOXD/CKIa9lXlS4Gw0wR/7Hr/M5+eDQOR1iFfvVXU/iJbUxBEb+hmEDhrwcS7S6dZWA3BfIGlQS/0wgtewsQvfxVMqADcYHYltZ0xkjf15ThqE78Gf5CiHKFfvz15b6XXqnk4II2x69tNUibuzZuYwXCLnwa82zr/qacoNf/M21FL/lTw3rdG4ledYrp0UDgafNOd3jleHIryr6O/YtGKZDOrRFxDzErd5TSYf74H7mPpeUaMS1pFv0rc+3q3j/6O2/dt2CUobcFrK3NxGpxe1Q2qLFa34iwUkwEBnd/lR8PO4jKnfrlFKbd11WMK96Y5jOEwheUN2jlh2fsu+TLdo25PE71ObERb/Fb8Df5imWJ1+0rc3KGFpMhpNT6etiv5Ar1UxaoFm9O2g/EK/pQ0IqO2LIEg2BVBWx01z3SzQOyBqOMxhuEajueVYBSSTVk8Fp3nzps31VfcawrpsiE9T7KXp123Qt1aW3eV+bQKJtALvL0wzSOkMAa0I3lOtD3PiS6kKiG3DGsJ4JnJ4YkpnUewcmojm5MhpvU4lNmjHEjG5rO7u2hqlOrEmGDZZiiBoqjADUpIIQQ+ZDOGOz8pk2KxQg2f2lqdZPJakUQzBkmZ3xsPSZJjMSQCVb2DIOCAvnbJNKMGQJ00ElKWwyzbZI7LXyOhpKU3z1dCUYWuz2o9OHOrfY5sdEuqU7aaL0t54sQ56HeL5JMN6TVUso29GuUX8i4bq6Ok7MA79+WEoecyKB/MiNCsSE6pXYYPeuLHi34IO1m4Tv4NTR5PFyBY3j2Qc+KfatYRYffCL5roQNKlPkT3uK+ntG7uCjeMiAVf+uIyTd7jyVYa+bLLeIdtWB6+MszKL0AoyH4qemdMv6dPu8NGv81u1zyqh98AgWGaaGeG0Rv5AKhmz/u4BQRZdVxn3YLGpQ+uSalRzJ93rL8LK8aKei23EqtatW5whWdGytp5dgkU3jkasYSSvdHFZ5/tmV4QrDag/PlZrjAcBzgr78Exw5KjbwElYZVmNjYevgVwUv3ODEVnDaM1RUIgE1hvRUSjYsFbx/ecUL/yJWIc/ygYoq8doxsmrrlt6TEe5QwIX13HAbQVUMcdE/Wmd3TWtRjKK83bXtD1YDP6uQIVA2TmrXFAa6HrIqw1L9gYJ3BW8g6ycUEwVG6Q3F85BkbkWVYVEjKngK6/G5zw5igzR6YxTtpymLYTFiJd/3tDDws4Oo4P3CBwrBjF1+9bT884JuVtFE+oEDn6Bc2qCKglC7NjqpMXz8PFa4hE+LxFo1sOLDuRvBzJLZh8oMDNk3lEp4UkK1UShK00mjuw/FTF4/Wl9NnFa5Sh5YIenbV610l1ID3z6YndoFN9v1AJUyfOIjQsUMbwqDk/i89TNJhu3yzVx4PIKBGg/thkdhAseQuNnIS6SYIdf4Vmbe58heOcgVBie6Ncx/ujblX/oqg+sFK3gntQh6v8XHedryR+ZdFJoZObhesILXfIvIlsXZ5geN+Qv5MQ0UxBAr4MXUVbw5XUS28/D1VgmnU3sekdvZyhkCwL7So9KxyHA9W8NMXm7Y2x/Osziq2qORw2OLGsWCJhcf1/JezkkD+3x9FcqYHzhsUaMk2l3Aj4B0uQf8mqOaQZVS9AeIHfm+WMoPhJGLE47LkpltyfAdg6JPJsOjgrRBHXCVijAOQxoMjqqiJrVBGfh+y2AGWXAb7aNoPXwPQ8C6NCx344oPMPN55i6J1Nr6D7BunqXGkwPUn/kUZMKzJHBC3rJtDMxMI7rBBnjvWEew4v5EwftQdUBijrkJqGRpY/WD8tdJ/QoC2zw+v60QbT5M/J6t834Ai6zG69cVp9uL06jKXDcg2zsnL7gVdqtF1Jv87wS0neWk+R1hN6vQ/oS29QaD6h2ANj5OUg3ocitV2AgWn56p/UoCZJ+O09b1s+7iTMkbpKsqZOVrIpuTTTIcz5ynhbFdATrm6qKoZHY9/SR6LSW0PO9LaRlptpQjk1g6sITINmdxopLdDUFymeHUHuhMwqYDY9tZzRdXwfKmThLRIl6dCM5E7C/zBBCbp8PlV9oO+MluT4e/qUggMj3jGP9q5wh/PbmMoOm814bNKuGQTdBsPt120nYoWE8vI/NEHPQWLwhh0yMf82nYdWvTKNmdR2iY8lQUkQAgVXVDa7YcL7ToiZWLND9KNvPjt2WbtgVbVBDTn1VziI0OX+fNYq1hM6wM0TrZjJcz5J084mALwVL8jkUbQIhSYubwNMSrZZxSizRpD/UcbhQm0/FleZwdUq+bEHNo2w7G1hUYO+m/hqY3JDY8zI7L+XiahM/u+WgN1/ejdRguJpPpZjcexynG4810OlmkpKLA7ysvMfx/sPzDH/7whx7jf+s15Ggcb4r+AAAAAElFTkSuQmCC" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                    </div>
                </div> 
            </div>
            <div className="text-center" style={{"marginTop":"7em"}}>
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {props.faculty?.name}
                </h3>
                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Bangalore
                </div>
                <div className="mb-2 text-blueGray-600">
                <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Reva University
                </div>
                <div className="mb-2 text-blueGray-600">
                <i className="fas fa-solid fa-graduation-cap mr-2 text-lg text-blueGray-400"></i>
                    {props.faculty?.department}
                </div>
                
                <div className="edit_profile">
                    <input type={"button"} value={"Edit Profile"} style={{"padding":"0.6em","border":"0.5px solid #6366f1","borderRadius":"8px","marginTop":"1em"}} data-bs-toggle="modal" data-bs-target="#editProfileModal" data-bs-whatever="@getbootstrap"></input>
                </div>
            </div>

            <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        
                        <div className="modal-body">
                            <form>
                                {/* <div className="mb-3">
                                    <label htmlFor="profile-name" className="col-form-label">Name</label>
                                    <input type="text" className="form-control" id="profile-name"/>
                                </div>  */}
                                <div className="mb-3">
                                    <label htmlFor="profile-description" className="col-form-label">Description</label>
                                    <textarea className="form-control" id="profile-description"></textarea>
                                </div>
                                
                                {/*<UploadButton label = {{"label": "Upload Display Picture"}}/>*/}

                            </form>
                        </div>
                        
                    </div>
                </div>
            </div>

            <div className="mt-10 py-4 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                        <p style={{"fontSize":"1.4em","fontWeight":"500","paddingBottom":"0.5em"}}>About Me</p>
                        <p className="text-lg leading-relaxed text-blueGray-700">
                        {props.faculty?.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default StudentDetail;