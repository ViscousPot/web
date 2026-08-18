---
title: Custom USB-A Dongle for Your USB-C Split Board
date: 2025-12-23
socialImage: images/posts/corne-zmk-usb-a-dongle.png
---

![Now also in video format!](https://www.youtube.com/watch?v=qyW3JeO_EDc)

This is a project that I've had in the works for a while now and just might be of interest to you **if you're already part of the ergomech community, or if you're considering joining us**! I'm always looking for ways to improve my setup and a dongle was on the list but for so long it couldn't be justified, simply because **not everything works easily with just a USB-C port**. But now that I have the best of both worlds, I can use the same board at home with a PC **and** on the go with all my devices.

[![This article was sponsored by PCBWay](https://miro.medium.com/v2/resize:fit:610/1*yuYSEWv0bGt4zkgW8T4lBA.png)](https://pcbway.com)<br>
_This article was sponsored by [PCBWay](https://pcbway.com)_

**In this article, I'll walk you through my journey creating a custom USB dongle for my split keyboard and let you know how you can make your own!**

**AI is not involved in my process**

---

## Why I wanted this

![[images/corne-zmk-usb-a-dongle/Still 2025-12-11 163905_3.1.1.png]]

For a while now, I've been using a split keyboard, and while it's got a decently large battery in it, I've always wanted to try a dongle. Partly because of the Reddit posts I'm seeing daily of people's awesome projects, but more so for the battery life boost for my main half. It's always felt weird that they drained at different speeds, when a majority of the time I was just sitting at my one desk.

My main challenge was that I couldn't justify losing the ability I currently have, to quickly travel with my keyboard.

![[images/corne-zmk-usb-a-dongle/Still 2025-12-22 203541_9.1.1.png]]

If I were to make a dongle, I would ideally want to use the same board as the keyboard halves. So, given that I am using a Corne v2 running ZMK, that would be any Pro Micro–compatible board with bluetooth. However, that raises the issue of most of these boards only coming with USB-C or micro USB ports. Carrying a separate dongle along with a cable is just impractical, and I would inevitably lose them.

![[images/corne-zmk-usb-a-dongle/Still 2025-12-22 203615_6.3.1.png]]

But then again, if I could add a USB-A plug, while maintaining the existing USB-C port, I could use it both with a PC **and** on the go and connect via bluetooth as needed...

So that's what I did!

---

## How you can make your own

### Parts List

![[images/corne-zmk-usb-a-dongle/Still 2025-12-11 164319_5.1.1.png]]

| Part                                 | Notes                                           |
| ------------------------------------ | ----------------------------------------------- |
| Pro Micro–compatible Bluetooth board |                                                 |
| 4 header pins                        | Often included with boards                      |
| 4 wires                              | I used jumper wires, but thinner wire is better |
| Two 3D-printed case halves           | Simple snap fit to hold the board and USB pins  |

Most of the parts can be easily sourced, but those lacking a 3D printer might not know where to go. That's where our sponsor PCBWay comes in.

---

## Printing with PCBWay

With PCBWay, all you have to do is visit their website, upload your files, and they will review them for any potential issues, ensuring quality prints that you would struggle to achieve at home. Plus, you can use my [link](https://pcbway.com/g/N2FA8g) for a discount on your first order!

![[images/corne-zmk-usb-a-dongle/Still 2025-12-23 182743_12.1.1.png]]

I received some beautiful prints from them, including transparent resin parts that are not easily achievable with a standard home 3D printer. The beautiful finish of the transparent resin enhances the aesthetic of the project, making it a great investment, in my opinion.

If you would like to order your own prints of the incense holder or the dongle case, please use the links below!

**Dongle Case**: [https://www.pcbway.com/project/shareproject/USB_A_USB_C_ZMK_Dongle_f4e7c666.html](https://www.pcbway.com/project/shareproject/USB_A_USB_C_ZMK_Dongle_f4e7c666.html)
**Incense Holder (Resin)**: [https://www.pcbway.com/project/shareproject/Resin_Incense_Holder_Tower_2ca93fcd.html](https://www.pcbway.com/project/shareproject/Resin_Incense_Holder_Tower_2ca93fcd.html)
**Incense Holder (FDM)**: [https://www.pcbway.com/project/shareproject/FDM_Incense_Holder_Tower_32b78954.html](https://www.pcbway.com/project/shareproject/FDM_Incense_Holder_Tower_32b78954.html)

---

## Creating Your Firmware

Before you can start soldering and assembling your dongle, you need to ensure that everything works on the software side. This involves wiping and reflashing all three boards (the dongle and two halves of your keyboard). I will assume some familiarity with building ZMK through GitHub actions.

**Here's how to get your firmware ready:**

1. **Fork the Repository:** Start by forking [my GitHub repository](https://github.com/ViscousPot/zmk-dongle) that houses the firmware.
2. **Edit the Keymap:** Adjust the keymap according to your preferences. This is where you can customize how your keyboard interacts with your operating system.
3. **Add Extra Features:** If you want to include additional features in your project, make these adjustments in the designated file within the repository.
4. **Build with GitHub Actions:** Use GitHub Actions to build your firmware. This automation ensures a smoother process without manual intervention.
5. **Download the Artifacts:** Once the build is complete, download the firmware artifacts to your computer in preparation for flashing.

---

## Flashing Your Firmware

![[images/corne-zmk-usb-a-dongle/Still 2025-12-22 203751_1.4.1.png]]

With your firmware ready, it's time to flash it onto your boards. Here's how to do it:

1. **Connect the Board:** Plug your board into your computer.
2. **Initiate Flash Mode:** To get it into flash mode, use something metallic to quickly bridge the RST and GND contacts twice in quick succession. This activates the flashing process.
3. **Verify the Connection:** The red LED on your board should remain lit, indicating successful entry into flash mode.
4. **Upload Firmware:** Your device will appear as a flash drive on your computer. Drag and drop your dongle's UF2 firmware file onto this drive. This action will automatically flash the firmware and reset the board.

After following these steps, your firmware will be successfully flashed, setting you up for the next stage: soldering.

---

## Soldering

![[images/corne-zmk-usb-a-dongle/Still 2025-12-23 183343_13.3.1.png]]

Now that your board is software-ready, it's time to prepare it physically through soldering.

First, I recommend using something to hold the board down. While a fancy board holder would do the job, Blu Tack is an effective alternative that keeps everything still while you work. Now you need to identify convenient solder pads for VCC, GND, D+, D– on your board. I've picked four accessible pads, but your board may differ.

![[images/corne-zmk-usb-a-dongle/Still 2025-12-23 183514_13.4.1.png]]

### Finding Solder Points

![[images/corne-zmk-usb-a-dongle/Still 2025-12-22 203857_7.10.1.png]]

If your board has a different layout, you may need to locate your own solder points. To do this, use a **USB-C breakout board** along with a multimeter in continuity mode. With one probe touching the breakout pin, find the corresponding pad on your board and the multimeter will beep, confirming the correct connection.

Once you know where you're soldering let's get to it!

1. Tin each pad and wire end.
2. Solder four wires: red = VCC, black = GND, green = D+, blue = D– (colors optional but useful).
3. Test continuity with a multimeter to verify correct connections.

---

## Assembly

![[images/corne-zmk-usb-a-dongle/Still 2025-12-22 204016_2.7.1.jpg]]

Finally, it's time to put everything together! This phase wraps up the project. Follow these steps to complete the assembly:

1. **Prepare the Assembly:** Lay the ends of the wires in the designated area where the pins will go.
2. **Insert USB Pins:** Insert the USB pins from the inner side, ensuring they lie flat against the wires for a secure connection.
3. **Secure with Solder (if needed):** Optionally, you can use a small amount of solder to attach the wires on the rear of the pins, allowing enough room for the wires to avoid interference.
4. **Close the Case:** Tuck the board behind the pins so it fits snugly, ensuring it is secure within the 3D-printed halves. Then, snap the top half onto the bottom half for a completed USB dongle.

After this step, you'll have a fully functional USB dongle ready for use, maintaining compatibility with both USB-C and USB-A ports!

---

## Final Part

![[images/corne-zmk-usb-a-dongle/Still 2025-12-22 204016_2.7.1(1).png]]

Once assembled, you can connect the dongle through USB 3.0 to the board, enabling all functionalities of the original USB-C port.

I'm also excited to show you the transparent version that was created using a case printed by PCBWay! It really looks great and has exceeded all the expectations I already had for transparent parts. **Well worth it!**

---

## Conclusion

In future installments, I'm going to enhance this project further by designing a custom case for my split keyboard, allowing for direct connection of the dongle to minimize the chances of losing it and remove the need to carry a cable. So stay tuned for that!

If you found this project interesting, feel free to leave a like or share it. I also invite you to check out my [Patreon](https://www.patreon.com/posts/146525249?pr=true), where you can access original source files and the [Discord](https://discord.com/invite/cgvjdDyzzB) to join discussions about this project and more.
