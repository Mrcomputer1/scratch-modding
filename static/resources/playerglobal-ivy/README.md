# Player Global Ivy Files
Ivy Files to provide information to Gradle so it will download the player globals. The player globals themselves are not provided here, they can be found [here](https://github.com/nexussays/playerglobal/).

## Available Versions
Currently, the available versions are the versions used by [scratch-flash](https://github.com/scratchfoundation/scratch-flash/blob/develop/config.groovy).
* 11.6
* 10.2

## Usage
```groovy
// scratch.gradle

// ...
repositories {
    // ...
    ivy {
        name 'Player Globals'

        // Remove this line:
        artifactPattern 'http://fpdownload.macromedia.com/get/flashplayer/installers/archive/[module]/[module][revision].[ext]'

        // Add these lines in its place:
        ivyPattern 'https://mrcomputer1.github.io/scratch-modding/resources/playerglobal-ivy/[module][revision].[ext]'
		artifactPattern 'https://raw.githubusercontent.com/nexussays/playerglobal/fef560243029214656d83fc673be0267a1ea0816/[revision]/[module].[ext]' // you can change this URL if you want, you need at least [revision].
    }
}
// ...
dependencies {
    // ...
    // Replace this line:
    external group: 'macromedia.com', name: 'playerglobal', version: playerVersion.replace('.', '_'), ext: 'swc'
    // with this:
    external group: 'macromedia.com', name: 'playerglobal', version: playerVersion, ext: 'swc'
    // ...
}
```